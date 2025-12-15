# Tahap 1: Dependencies
FROM node:20-alpine AS deps

# Install dependencies untuk native modules
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package files
COPY package.json bun.lock* package-lock.json* ./

# Install ALL dependencies (including dev) yang diperlukan untuk build
RUN npm install --ignore-scripts || \
    (npm ci --ignore-scripts && echo "Installed with npm ci")

# Tahap 2: Builder
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependencies dari stage deps
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Copy Prisma schema dan generate client
COPY prisma ./prisma
RUN npx prisma generate

# Set environment untuk build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
# Skip Google Fonts download saat build (akan di-download saat runtime)
ENV NEXT_FONT_GOOGLE_MOCKED_RESPONSES='[{"url":"https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap","css":"","fallbackFonts":["system-ui","arial"]},{"url":"https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap","css":"","fallbackFonts":["monospace"]}]'

# Build Next.js dengan standalone output
RUN npm run build

# Tahap 3: Runner (Production)
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Buat user non-root untuk keamanan
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy file yang diperlukan dari builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Set ownership ke nextjs user
RUN chown -R nextjs:nodejs /app

USER nextjs

# Expose port
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start aplikasi
CMD ["node", "server.js"]
