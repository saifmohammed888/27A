import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { name, subject, message, email, phoneNumber } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 587,
    secure: false,
    auth: {
      user: "support@27a.beauty",
      pass: "Saif@1996", // Replace with your actual email password
    },
  });

  const responseMessage = `
    Dear ${name},

    Thank you for reaching out to 27A Beauty! We have received your message and will get back to you within 12 hours.

    Contact: ${phoneNumber}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}

    Best regards,
    27A Beauty Support Team
  `;

  try {
    await transporter.sendMail({
      from: "support@27a.beauty",
      to: email,
      cc: "saifmohammed888@gmail.com, alihairstories@gmail.com",
      subject: `27A Beauty Support - ${subject}`,
      text: responseMessage,
    });
    res.status(200).json({ message: 'Confirmation email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}
