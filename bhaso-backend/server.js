const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const joinCommunityRouter = require("./routes/joinCommunityRouter");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/joinCommunityContactForm", joinCommunityRouter);

app.get("/", (req, res) => {
  res.send("BHASO Backend with MongoDB is Running.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
