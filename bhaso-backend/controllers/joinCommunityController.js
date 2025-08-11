// controllers/joinCommunityController.js
const { insertContact } = require("../models/joinCommunityModel");
const nodemailer = require("nodemailer");

exports.createContact = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, subscribeNewsLetter } = req.body;

    if (!firstName || !lastName || !email) {
      return res
        .status(400)
        .json({ error: "First name, last name, and email are required." });
    }

    // Save to PostgreSQL
    const newContact = await insertContact({
      firstName,
      lastName,
      phone,
      email,
      subscribeNewsLetter: subscribeNewsLetter || false,
    });

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use SMTP
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App password or real password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send confirmation to user
      subject: "Thank you for joining BHASO's Community",
      text: `Hi ${firstName},\n\nThank you for joining BHASO's Community. We'll keep you updated on upcoming events and opportunities.\n\nRegards,\nBHASO Team`,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(201)
      .json({
        message: "Contact saved and email sent successfully",
        contact: newContact,
      });
  } catch (err) {
    console.error("Error creating contact:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
