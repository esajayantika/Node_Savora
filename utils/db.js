require("dotenv").config();

const dns = require("dns");
const mongoose = require("mongoose");
// Gunakan dnscrypt-proxy sebagai DNS lokal
dns.setServers(["127.0.0.1"]);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Atlas connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));
