const Contact = require("../models/joinCommunityModel");
const nodemailer = require("nodemailer");

exports.createContact = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, subscribeNewsLetter } = req.body;

    if (!firstName || !lastName || !email) {
      return res
        .status(400)
        .json({ error: "First name, last name, and email are required." });
    }

    const newContact = new Contact({
      firstName,
      lastName,
      phone,
      email,
      subscribeNewsLetter: subscribeNewsLetter || false,
    });

    await newContact.save();

    const transporter = nodemailer.createTransport({
      service: "gmail", //
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for joining BHASO's Community",
      text: `Hi ${firstName},\n\nThank you for joining BHASO's Community. We'll keep you updated on upcoming events and opportunities.\n\nRegards,\nBHASO Team`,
    };

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Community Contact Signup",
      text: `A new member has joined the community:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${
        phone || "N/A"
      }\nSubscribed to Newsletter: ${subscribeNewsLetter ? "Yes" : "No"}`,
    };

    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(201).json({
      message:
        "Contact saved, confirmation email sent to user, and notification sent to admin",
      contact: newContact,
    });
  } catch (err) {
    console.error("Error creating contact:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
