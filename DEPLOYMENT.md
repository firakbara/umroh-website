# 🚀 Panduan Deployment Website Umroh

Panduan lengkap untuk deploy aplikasi Website Umroh menggunakan Docker.

## 📋 Prerequisites

Pastikan sudah terinstall:
- **Docker** (versi 20.10 atau lebih baru)
- **Docker Compose** (versi 2.0 atau lebih baru)
- **Git** (untuk clone repository)

### Cara Install Docker

**Windows:**
- Download [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)
- Jalankan installer dan ikuti instruksi

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

**macOS:**
- Download [Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac-install/)

## 🏗️ Arsitektur Stack

Stack lengkap akan mencakup:
1. **MySQL 8.0** - Database (Port: 3306)
2. **phpMyAdmin** - Database Management UI (Port: 8080)
3. **Next.js App** - Website Umroh (Port: 3000)

## 🔧 Setup Environment

### 1. Clone Repository (jika belum)

```bash
git clone <repository-url>
cd umroh-website
```

### 2. Setup Environment Variables

Buat file `.env` di root project (atau update yang sudah ada):

```env
# Database Connection
DATABASE_URL="mysql://umroh_user:umroh_pass@mysql:3306/umroh_db"

# Next.js
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# Tambahkan environment variables lain sesuai kebutuhan
# NEXT_PUBLIC_API_URL=https://yourdomain.com
```

> **⚠️ PENTING**: Untuk production, ubah password database di `docker-compose.yml` dan `.env` dengan password yang lebih aman!

### 3. Update Credentials Production (WAJIB!)

Edit `docker-compose.yml` dan ganti credentials default:

```yaml
environment:
  MYSQL_ROOT_PASSWORD: <password-kuat-anda>
  MYSQL_DATABASE: umroh_db
  MYSQL_USER: umroh_user
  MYSQL_PASSWORD: <password-kuat-anda>
```

Dan update `DATABASE_URL` di service `app`:

```yaml
environment:
  DATABASE_URL: mysql://umroh_user:<password-kuat-anda>@mysql:3306/umroh_db
```

## 🚀 Deployment

### Development/Testing Lokal

1. **Build dan jalankan semua services:**

```bash
docker-compose up -d --build
```

2. **Cek status containers:**

```bash
docker-compose ps
```

Semua service harus status "Up" atau "Up (healthy)".

3. **Lihat logs aplikasi:**

```bash
# Semua services
docker-compose logs -f

# Hanya app
docker-compose logs -f app

# Hanya database
docker-compose logs -f mysql
```

4. **Akses aplikasi:**
   - Website: http://localhost:3000
   - phpMyAdmin: http://localhost:8080
     - Server: `mysql`
     - Username: `umroh_user`
     - Password: `umroh_pass` (atau yang sudah Anda ganti)

### Production Deployment (VPS)

#### 1. Setup VPS

Pastikan VPS Anda memiliki:
- Minimal 2GB RAM
- Docker & Docker Compose terinstall
- Port 80, 443, 3000 terbuka

#### 2. Clone dan Setup

```bash
# SSH ke VPS
ssh user@your-vps-ip

# Clone repository
git clone <repository-url>
cd umroh-website

# Setup environment
cp .env.example .env
nano .env  # Edit sesuai kebutuhan
```

#### 3. Deploy dengan Docker Compose

```bash
# Build dan jalankan
docker-compose up -d --build

# Verifikasi
docker-compose ps
docker-compose logs -f app
```

#### 4. Setup Reverse Proxy (Nginx - Opsional)

Untuk production dengan domain, gunakan Nginx sebagai reverse proxy:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Kemudian setup SSL dengan Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## 🔄 Database Management

### Jalankan Prisma Migrations

Migrations otomatis dijalankan saat container start, tapi jika perlu manual:

```bash
docker-compose exec app npx prisma migrate deploy
```

### Generate Prisma Client

```bash
docker-compose exec app npx prisma generate
```

### Seed Database (Opsional)

```bash
docker-compose exec app bun prisma/seed.ts
```

### Backup Database

```bash
docker-compose exec mysql mysqldump -u umroh_user -pumroh_pass umroh_db > backup.sql
```

### Restore Database

```bash
docker-compose exec -T mysql mysql -u umroh_user -pumroh_pass umroh_db < backup.sql
```

## 🔍 Troubleshooting

### Container tidak start

```bash
# Cek logs
docker-compose logs

# Restart service tertentu
docker-compose restart app

# Rebuild dari awal
docker-compose down
docker-compose up -d --build
```

### Database connection error

1. Pastikan MySQL sudah healthy:
   ```bash
   docker-compose ps
   ```

2. Cek connection string di `.env`

3. Restart app service:
   ```bash
   docker-compose restart app
   ```

### Port sudah digunakan

Jika port 3000 atau 3306 sudah dipakai, edit `docker-compose.yml`:

```yaml
ports:
  - "3001:3000"  # Ubah port host
```

### Memory/Performance Issues

Update `docker-compose.yml` untuk limit resources:

```yaml
app:
  # ... config lainnya
  deploy:
    resources:
      limits:
        cpus: '1'
        memory: 1G
      reservations:
        cpus: '0.5'
        memory: 512M
```

### Prisma Migration Gagal

Jalankan manual dan lihat error:

```bash
docker-compose exec app npx prisma migrate deploy --schema=./prisma/schema.prisma
```

## 🔧 Maintenance Commands

### Update Aplikasi

```bash
# Pull latest code
git pull origin main

# Rebuild dan restart
docker-compose up -d --build
```

### Lihat Resource Usage

```bash
docker stats
```

### Bersihkan Unused Images/Containers

```bash
docker system prune -a
```

### Stop Semua Services

```bash
docker-compose down
```

### Stop dan Hapus Semua Data (HATI-HATI!)

```bash
docker-compose down -v  # -v akan hapus volumes (database!)
```

## 📊 Monitoring

### Health Check Endpoint

Aplikasi memiliki health check di:
```
GET http://localhost:3000/api/health
```

Response:
```json
{
  "status": "ok",
  "timestamp": "2025-12-15T07:00:00.000Z"
}
```

### Monitor Logs Real-time

```bash
# All services
docker-compose logs -f

# Filter by service
docker-compose logs -f app
docker-compose logs -f mysql
```

## 🔐 Security Best Practices

1. **Ganti semua default passwords** di `docker-compose.yml`
2. **Jangan commit `.env`** ke git (sudah ada di `.gitignore`)
3. **Gunakan HTTPS** di production dengan SSL certificate
4. **Limit network access** dengan firewall (UFW/iptables)
5. **Regular backup** database
6. **Update dependencies** secara berkala
7. **Monitor logs** untuk aktivitas mencurigakan

## 🎯 Production Checklist

Sebelum deploy ke production:

- [ ] Ganti semua default passwords
- [ ] Setup SSL certificate (Let's Encrypt)
- [ ] Configure backup otomatis
- [ ] Setup monitoring (Uptime, Logs)
- [ ] Test semua fitur di staging
- [ ] Configure firewall rules
- [ ] Setup domain dan DNS
- [ ] Enable rate limiting (jika perlu)
- [ ] Configure CORS policy (jika ada API)
- [ ] Review environment variables

## 📞 Support

Jika ada masalah atau pertanyaan, hubungi tim development atau buat issue di repository.

---

**Happy Deploying! 🚀**
