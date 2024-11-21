const express = require("express");
const ContactModel = require("./models/ContactModel");
const cors = require("cors");
const mongoose = require("mongoose");
const NewsletterModel = require("./models/NewsletterModel");

const app = express();
app.use(
  cors({
    origin: import.meta.env.VITE_API_URL || "http://localhost:3000",
  })
);
app.use(express.json());

// MongoDB connection with error handling
mongoose
  .connect(
    "mongodb+srv://tadc936:jJDYkDkzQOAL0yrZ@websitedb.mgimf.mongodb.net/Forms?retryWrites=true&w=majority&appName=WebsiteDB",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("DB connection error:", err));

// Connection error handling
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

app.post("/createMessage", async (req, res) => {
  try {
    const { name, email, mes } = req.body;
    const newMessage = new ContactModel({ name, email, message: mes });
    const savedMessage = await newMessage.save();
    res.json(savedMessage);
  } catch (err) {
    console.error("Error creating message:", err);
    res.status(500).json({ error: "Error" });
  }
});

app.post("/createNLEmail", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newEmail = new NewsletterModel({ name, email });
    const savedEmail = await newEmail.save();
    res.json(savedEmail);
  } catch (err) {
    console.error("Error creating message:", err);
    res.status(500).json({ error: "Error" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
