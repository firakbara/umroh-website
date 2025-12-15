import { z } from 'zod';

export const orderSchema = z.object({
  packageId: z.number().int().positive('Package ID harus positif'),
  fullName: z
    .string()
    .min(3, 'Nama minimal 3 karakter')
    .max(100, 'Nama maksimal 100 karakter'),
  email: z.string().email('Email tidak valid').optional().or(z.literal('')),
  phone: z
    .string()
    .regex(/^(08|\+?62)[0-9]{9,12}$/, 'Format nomor HP tidak valid (contoh: 081234567890)'),
  totalPassengers: z
    .number()
    .int()
    .min(1, 'Minimal 1 jamaah')
    .max(50, 'Maksimal 50 jamaah'),
  notes: z.string().max(500, 'Catatan maksimal 500 karakter').optional(),
});

export type OrderInput = z.infer<typeof orderSchema>;