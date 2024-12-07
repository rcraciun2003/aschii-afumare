import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, phone, billNumber, iban } = req.body;

    if (!name || !phone || !billNumber || !iban) {
        return res.status(400).json({ message: 'Toate câmpurile sunt obligatorii.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: 'Solicitare Returnare',
            text: `
                Nume: ${name}
                Telefon: ${phone}
                Număr Factură: ${billNumber}
                IBAN: ${iban}
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Email trimis cu succes.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Nu s-a putut trimite emailul.' });
    }
}
