import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, country, email, message } = req.body;

        // Log environment variables
        console.log('EMAIL_USER:', process.env.EMAIL_USER);
        console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

        // Create a transporter object using SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Set up email data
        let mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nCountry: ${country}\nEmail: ${email}\nMessage: ${message}`,
        };

        try {
            // Send mail with defined transport object
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Message sent successfully!' });
        } catch (error: any) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send message.', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
