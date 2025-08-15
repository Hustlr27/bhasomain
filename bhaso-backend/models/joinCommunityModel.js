const mongoose = require("mongoose");
const slugify = require("slugify");

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String },
    email: { type: String, required: true },
    subscribeNewsLetter: { type: Boolean, default: false },
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

contactSchema.pre("save", function (next) {
  this.slug = slugify(`${this.firstName} ${this.lastName}`, { lower: true });
  next();
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
