// src/app/api/email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse the JSON body
    const { name, email, message } = await req.json();

    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Must be Gmail App Password
      },
    });

    // Mail options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO, // Your receiving email, e.g., hussainkhan5march@gmail.com
      subject: "📩 New Contact Form Submission from Hk-Portfolio",
      text: `
        You have a new contact form submission:
       
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      // Optional: Add HTML version
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <small>Sent from your portfolio website</small>
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}