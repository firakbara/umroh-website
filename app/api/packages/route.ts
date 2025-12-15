import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Get packages dari database
    const packages = await prisma.package.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Parse JSON facilities & convert Decimal to Number
    const packagesWithParsedFacilities = packages.map((pkg) => ({
      ...pkg,
      facilities: JSON.parse(pkg.facilities as string),
      price: Number(pkg.price),
    }));

    return NextResponse.json({
      success: true,
      data: {
        packages: packagesWithParsedFacilities,
      },
    });
  } catch (error) {
    console.error('[API Error] GET /api/packages:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to fetch packages',
        },
      },
      { status: 500 }
    );
  }
}