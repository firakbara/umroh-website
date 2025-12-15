import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Get first settings record (should only be 1)
    const settings = await prisma.settings.findFirst({
      orderBy: {
        id: 'asc',
      },
    });

    // Jika belum ada settings
    if (!settings) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'NOT_FOUND',
            message: 'Settings not found',
          },
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: settings,
    });
  } catch (error) {
    console.error('[API Error] GET /api/settings:', error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to fetch settings',
        },
      },
      { status: 500 }
    );
  }
}