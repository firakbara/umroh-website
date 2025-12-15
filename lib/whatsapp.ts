interface OrderData {
    orderId: number;
    orderNumber: string;
    packageTitle: string;
    packagePrice: number;
    packageDuration: string;
    fullName: string;
    email?: string;
    phone: string;
    totalPassengers: number;
    notes?: string;
}

export function generateWhatsAppMessage(order: OrderData): string {
    const totalAmount = order.packagePrice * order.totalPassengers;

    const message = `
*PEMESANAN PAKET UMROH* 🕌✨

━━━━━━━━━━━━━━━━
*DETAIL PAKET:*
📦 Paket: ${order.packageTitle}
⏱️ Durasi: ${order.packageDuration}
💰 Harga: Rp ${order.packagePrice.toLocaleString('id-ID')}

━━━━━━━━━━━━━━━━
*DATA PEMESAN:*
👤 Nama: ${order.fullName}
${order.email ? `📧 Email: ${order.email}\n` : ''}📱 No. HP: ${order.phone}
👥 Jumlah Jamaah: ${order.totalPassengers} orang

💵 *TOTAL ESTIMASI:* 
Rp ${totalAmount.toLocaleString('id-ID')}

${order.notes ? `📝 *Catatan:*\n${order.notes}\n\n` : ''}━━━━━━━━━━━━━━━━

🆔 *ID Pesanan:* ${order.orderNumber}
📅 *Waktu Pemesanan:* ${new Date().toLocaleString('id-ID', {
        dateStyle: 'full',
        timeStyle: 'short',
    })}

_Mohon informasi lebih lanjut untuk melanjutkan pemesanan. Jazakallahu khairan!_ 🙏
  `.trim();

    return message;
}

export function createWhatsAppLink(message: string): string {
    const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '6285158394338';
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${waNumber}?text=${encodedMessage}`;
}

export function generateOrderNumber(): string {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, '0');

    return `ORD${year}${month}${day}${random}`;
}