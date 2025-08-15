// testEmail.js
const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendTestEmail() {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or "smtp" if using another provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "yourpersonalemail@example.com", // 👈 change to your real email
      subject: "Test Email from BHASO Backend",
      text: "Hello, this is a test email to check if Nodemailer works.",
    });

    console.log("✅ Email sent successfully:", info.response);
  } catch (err) {
    console.error("❌ Error sending email:", err);
  }
}

sendTestEmail();
