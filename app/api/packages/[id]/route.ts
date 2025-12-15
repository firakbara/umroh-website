import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);

    // Validasi ID
    if (isNaN(id)) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid package ID',
          },
        },
        { status: 400 }
      );
    }

    // Get package dari database
    const pkg = await prisma.package.findUnique({
      where: {
        id: id,
      },
    });

    // Cek apakah package ditemukan
    if (!pkg) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'NOT_FOUND',
            message: `Package with ID ${id} not found`,
          },
        },
        { status: 404 }
      );
    }

    // Parse facilities & convert price
    const packageData = {
      ...pkg,
      facilities: JSON.parse(pkg.facilities as string),
      price: Number(pkg.price),
    };

    return NextResponse.json({
      success: true,
      data: packageData,
    });
  } catch (error) {
    console.error('[API Error] GET /api/packages/[id]:', error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to fetch package',
        },
      },
      { status: 500 }
    );
  }
}