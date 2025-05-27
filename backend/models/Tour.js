const mongoose = require('mongoose');

// 🔌 tour-backend veritabanına özel bağlantı
const tourDb = mongoose.createConnection('mongodb://localhost:27017/tour-backend', {
  serverSelectionTimeoutMS: 5000,
});

const tourSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  location: String,
  category: String,
  duration: String,
  rating: Number,
  amenities: [String],
  website: String,
  source: String,
  lastUpdated: String,
}, { timestamps: true });

module.exports = tourDb.model('Tour', tourSchema);
