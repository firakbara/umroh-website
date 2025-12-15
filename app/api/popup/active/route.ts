import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of day

    // Get active popup
    const popup = await prisma.popup.findFirst({
      where: {
        isActive: true,
        OR: [
          {
            AND: [
              { startDate: { lte: today } },
              { endDate: { gte: today } },
            ],
          },
          {
            AND: [
              { startDate: null },
              { endDate: null },
            ],
          },
        ],
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Jika tidak ada popup aktif
    if (!popup) {
      return NextResponse.json({
        success: true,
        data: null,
        message: 'No active popup at this moment',
      });
    }

    return NextResponse.json({
      success: true,
      data: popup,
    });
  } catch (error) {
    console.error('[API Error] GET /api/popup/active:', error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to fetch popup',
        },
      },
      { status: 500 }
    );
  }
}