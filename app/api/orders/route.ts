import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { orderSchema } from '@/lib/validations';
import {
    generateOrderNumber,
    generateWhatsAppMessage,
    createWhatsAppLink,
} from '@/lib/whatsapp';

export async function POST(request: Request) {
    try {
        // Parse request body
        const body = await request.json();

        // Validasi input dengan Zod
        const validationResult = orderSchema.safeParse(body);

        if (!validationResult.success) {
            const errors = validationResult.error.flatten().fieldErrors;
            return NextResponse.json(
                {
                    success: false,
                    error: {
                        code: 'VALIDATION_ERROR',
                        message: 'Data tidak valid',
                        details: errors,
                    },
                },
                { status: 400 }
            );
        }

        const data = validationResult.data;

        // Cek apakah package exists
        const packageData = await prisma.package.findUnique({
            where: { id: data.packageId },
        });

        if (!packageData) {
            return NextResponse.json(
                {
                    success: false,
                    error: {
                        code: 'NOT_FOUND',
                        message: `Paket dengan ID ${data.packageId} tidak ditemukan`,
                    },
                },
                { status: 404 }
            );
        }

        // Generate order number
        const orderNumber = generateOrderNumber();

        // Simpan order ke database
        const order = await prisma.order.create({
            data: {
                orderNumber,
                packageId: data.packageId,
                packageTitle: packageData.title,
                packagePrice: packageData.price,
                packageDuration: packageData.duration,
                fullName: data.fullName,
                email: data.email || null,
                phone: data.phone,
                totalPassengers: data.totalPassengers,
                notes: data.notes || null,
                status: 'PENDING',
            },
        });

        // Generate WhatsApp message & link
        const waMessage = generateWhatsAppMessage({
            orderId: order.id,
            orderNumber: order.orderNumber,
            packageTitle: order.packageTitle,
            packagePrice: Number(order.packagePrice),
            packageDuration: order.packageDuration || packageData.duration,
            fullName: order.fullName,
            email: order.email || undefined,
            phone: order.phone,
            totalPassengers: order.totalPassengers,
            notes: order.notes || undefined,
        });

        const whatsappLink = createWhatsAppLink(waMessage);

        // Return response
        return NextResponse.json(
            {
                success: true,
                data: {
                    orderId: order.id,
                    orderNumber: order.orderNumber,
                    whatsappLink,
                    orderDetails: {
                        packageTitle: order.packageTitle,
                        packagePrice: Number(order.packagePrice),
                        totalPassengers: order.totalPassengers,
                        totalAmount: Number(order.packagePrice) * order.totalPassengers,
                    },
                },
                message: 'Pesanan berhasil dibuat. Redirecting to WhatsApp...',
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('[API Error] POST /api/orders:', error);

        return NextResponse.json(
            {
                success: false,
                error: {
                    code: 'INTERNAL_ERROR',
                    message: 'Gagal membuat pesanan',
                },
            },
            { status: 500 }
        );
    }
}