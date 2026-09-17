require("dotenv").config();

const mongoose = require("mongoose");

//cek dan gunakan environment vercel
if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
  const dns = require("dns");
  // Gunakan dnscrypt-proxy sebagai DNS lokal
  dns.setServers(["127.0.0.1"]);
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI).then((m) => {
      console.log("MongoDB Atlas connected!");
      return m;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = connectDB;
