import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Metoda nu este permisă' });
    }

    const { customer, cart } = req.body;

    // Validate input
    if (!customer?.name || !customer?.email || !customer?.address || !cart?.length) {
        return res.status(400).json({ message: 'Date de comandă nevalide' });
    }

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const orderDetails = cart.map(
        (item) => `${item.name} x ${item.quantity} - ${(item.price * item.quantity).toFixed(2)} EUR`
    ).join('\n');

    const emailContent = `
    Comanda noua Fumarele
    
    Detalii client:
    Nume: ${customer.name}
    Email: ${customer.email}
    Adresa: ${customer.address}
    Telefon: ${customer.phone}
    
    Rezumatul comenzii:
    ${orderDetails}
    
    Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)} LEI
    `;

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: 'Comanda noua - Fumarele',
            text: emailContent,
        });

        return res.status(200).json({ message: 'Comanda a fost trimisa cu succes!' });
    } catch (error) {
        console.error('Eroare la trimiterea e-mailului:', error.message);
        return res.status(500).json({ message: 'Trimiterea comenzii a eșuat: ' + error.message });
    }
}
