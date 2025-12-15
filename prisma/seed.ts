import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting seed...');

    // 1. Clear existing data (optional - hati-hati di production!)
    await prisma.order.deleteMany();
    await prisma.package.deleteMany();
    await prisma.popup.deleteMany();
    await prisma.settings.deleteMany();

    console.log('✅ Cleared existing data');

    // 2. Seed Settings (Info Perusahaan)
    const settings = await prisma.settings.create({
        data: {
            companyName: 'Berkah Umroh Indonesia',
            tagline: 'Wujudkan Impian Ibadah Anda ke Tanah Suci',
            address: 'Jl. Masjid Raya No. 123, Jakarta Selatan 12345',
            phone: '021-12345678',
            whatsapp: '6285158394338',
            email: 'info@berkah-umroh.com',
            instagram: '@berkah.umroh',
            facebook: 'BerkahUmrohIndonesia',
            aboutUs: 'PT Berkah Umroh Indonesia adalah travel umroh resmi terdaftar Kemenag RI dengan pengalaman lebih dari 10 tahun melayani ribuan jamaah. Kami berkomitmen memberikan pelayanan terbaik dengan harga terjangkau.',
            logo: '/images/logo.png',
        },
    });

    console.log('✅ Created settings:', settings.companyName);

    // 3. Seed Popup Promo
    const popup = await prisma.popup.create({
        data: {
            title: '🎉 PROMO AKHIR TAHUN 2025! 🎉',
            content: `⏰ DISKON Rp 2.500.000 untuk Pendaftaran Sebelum 31 Desember!

🕌 Paket Umroh Reguler 9 Hari
💰 Harga Normal: Rp 29.900.000
✨ Harga Promo: Rp 27.400.000

🎁 BONUS:
✅ Free Tas Koper Umroh
✅ Free Buku Panduan Manasik
✅ Free Konsultasi Gratis

📞 Hubungi Kami Sekarang!`,
            image: '/images/promo-banner.jpg',
            ctaText: 'Chat WhatsApp Sekarang',
            ctaLink: 'https://wa.me/6285158394338?text=Halo%20saya%20tertarik%20dengan%20promo%20akhir%20tahun',
            isActive: true,
            startDate: new Date('2025-12-01'),
            endDate: new Date('2025-12-31'),
        },
    });

    console.log('✅ Created popup:', popup.title);

    // 4. Seed Packages (5 Paket Umroh)
    const packages = await prisma.package.createMany({
        data: [
            // PAKET 1: Umroh Hemat
            {
                title: 'Paket Umroh Hemat 9 Hari',
                slug: 'paket-umroh-hemat-9-hari',
                description:
                    'Paket umroh ekonomis dengan fasilitas lengkap untuk jamaah yang menginginkan perjalanan ibadah dengan budget terjangkau tanpa mengurangi kualitas pelayanan.',
                duration: '9 Hari 7 Malam',
                price: 24500000,
                hotel: 'Hotel Bintang 3 - Dekat Masjidil Haram & Masjid Nabawi',
                airline: 'Saudia Airlines / Malaysia Airlines (Transit)',
                facilities: JSON.stringify([
                    '✈️ Tiket Pesawat PP Jakarta-Jeddah',
                    '🏨 Hotel Bintang 3 (Quad Share)',
                    '🍽️ Makan 3x Sehari Menu Indonesia',
                    '🚌 Transportasi Bus AC Full',
                    '📿 Perlengkapan Umroh Lengkap',
                    '👨‍🏫 Muthawwif Berpengalaman',
                    '📜 Visa Umroh Resmi Kemenag',
                    '🛡️ Asuransi Perjalanan',
                    '💧 Air Zamzam 5 Liter',
                    '🕌 City Tour Makkah & Madinah',
                ]),
                quota: 45,
                image: '/images/packages/paket-hemat.jpg',
                departureDate: new Date('2025-03-15'),
                isActive: true,
            },

            // PAKET 2: Umroh Reguler
            {
                title: 'Paket Umroh Reguler 9 Hari',
                slug: 'paket-umroh-reguler-9-hari',
                description:
                    'Paket umroh paling populer dengan hotel bintang 4 dan direct flight. Ideal untuk jamaah yang menginginkan kenyamanan maksimal dengan harga terjangkau.',
                duration: '9 Hari 7 Malam',
                price: 29900000,
                hotel: 'Hotel Bintang 4 - Golden Tulip / Concorde (atau setaraf)',
                airline: 'Garuda Indonesia (Direct Flight)',
                facilities: JSON.stringify([
                    '✈️ Garuda Indonesia Direct Flight PP',
                    '🏨 Hotel Bintang 4 Dekat Masjid',
                    '🍽️ Makan 3x Sehari + Prasmanan',
                    '🚌 Bus Pariwisata Exclusive AC',
                    '📿 Perlengkapan Umroh Premium',
                    '👨‍🏫 Muthawwif Bahasa Indonesia',
                    '📜 Visa & Dokumen All-In',
                    '🛡️ Asuransi Kesehatan & Kecelakaan',
                    '💧 Air Zamzam 10 Liter',
                    '🕌 Ziarah Lengkap + Manasik Umroh',
                ]),
                quota: 35,
                image: '/images/packages/paket-reguler.jpg',
                departureDate: new Date('2025-04-10'),
                isActive: true,
            },

            // PAKET 3: Umroh Premium
            {
                title: 'Paket Umroh Premium 12 Hari',
                slug: 'paket-umroh-premium-12-hari',
                description:
                    'Paket umroh eksklusif dengan hotel bintang 5 view masjid dan kereta cepat Haramain. Sempurna untuk jamaah yang menginginkan pengalaman ibadah yang istimewa.',
                duration: '12 Hari 10 Malam',
                price: 36500000,
                hotel: 'Hotel Bintang 5 - Le Meridien / Shohada (View Masjid)',
                airline: 'Garuda Indonesia / Saudia Airlines (Direct)',
                facilities: JSON.stringify([
                    '✈️ Direct Flight Premium Class',
                    '🏨 Hotel Bintang 5 di Pelataran Masjid',
                    '🍽️ Fullboard Buffet Internasional',
                    '🚄 Kereta Cepat Haramain Makkah-Madinah',
                    '🚌 Bus VIP dengan Free WiFi',
                    '📿 Tas Umroh Eksklusif + Koper',
                    '🏙️ City Tour Thaif',
                    '👨‍🏫 Tour Leader & Muthawwif',
                    '🛡️ Asuransi Premium',
                    '💧 Air Zamzam 20 Liter',
                ]),
                quota: 25,
                image: '/images/packages/paket-premium.jpg',
                departureDate: new Date('2025-05-20'),
                isActive: true,
            },

            // PAKET 4: Umroh Plus Turki
            {
                title: 'Paket Umroh Plus Turki 14 Hari',
                slug: 'paket-umroh-plus-turki-14-hari',
                description:
                    'Paket umroh kombinasi wisata religi ke Turki. Kunjungi Istanbul, Bursa, dan situs-situs bersejarah Islam sambil menunaikan ibadah umroh.',
                duration: '14 Hari 12 Malam',
                price: 38900000,
                hotel: 'Hotel Bintang 4-5 (Makkah, Madinah, Istanbul)',
                airline: 'Turkish Airlines',
                facilities: JSON.stringify([
                    '✈️ Turkish Airlines Full Service',
                    '🏨 Hotel Bintang 4-5 (3 Negara)',
                    '🍽️ Makan 3x Sehari Halal',
                    '🕌 Umroh + Wisata Istanbul & Bursa',
                    '🏰 Tour Hagia Sophia, Blue Mosque, Topkapi',
                    '🚌 Transportasi Bus Pariwisata',
                    '📿 Perlengkapan Lengkap',
                    '👨‍🏫 Tour Guide Lokal',
                    '🛡️ Asuransi Multinegara',
                    '📸 Dokumentasi Foto Gratis',
                ]),
                quota: 20,
                image: '/images/packages/paket-turki.jpg',
                departureDate: new Date('2025-06-15'),
                isActive: true,
            },

            // PAKET 5: Umroh Ramadhan
            {
                title: 'Paket Umroh Ramadhan Spesial 12 Hari',
                slug: 'paket-umroh-ramadhan-spesial-12-hari',
                description:
                    'Paket umroh spesial di bulan Ramadhan dengan hotel premium dan paket iftar di Masjidil Haram. Raih pahala berlipat ganda di bulan penuh berkah.',
                duration: '12 Hari 10 Malam',
                price: 42000000,
                hotel: 'Hotel Bintang 5 Premium - Walking Distance',
                airline: 'Garuda Indonesia / Saudia (Direct)',
                facilities: JSON.stringify([
                    '✈️ Direct Flight Ramadhan Schedule',
                    '🏨 Hotel Bintang 5 Walking Distance',
                    '🍽️ Sahur & Berbuka Premium Buffet',
                    '🌙 Paket Iftar di Masjidil Haram',
                    '🕌 Tarawih & Tahajud Berjamaah',
                    '📿 Mukena & Sajadah Premium',
                    '🚄 Kereta Cepat Haramain',
                    '👨‍🏫 Kajian Ramadhan Exclusive',
                    '🛡️ Asuransi Full Coverage',
                    '🎁 Hampers Ramadhan',
                ]),
                quota: 30,
                image: '/images/packages/paket-ramadhan.jpg',
                departureDate: new Date('2025-03-01'),
                isActive: true,
            },
        ],
    });

    console.log(`✅ Created ${packages.count} packages`);

    console.log('🎉 Seed completed successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });