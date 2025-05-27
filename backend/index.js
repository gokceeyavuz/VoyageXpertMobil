require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3001;

// ✅ ROUTES sadece 1 kez import ediliyor
const tourRoutes = require('./routes/tourRoutes');
const authRoutes = require('./routes/authRoutes');
const aiGuideRoutes = require('./routes/aiGuide');
// ✅ Middleware'ler en üstte tanımlanıyor
app.use(express.json());

app.use(
  cors({
    origin: ['http://192.168.6.36:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
  }),
);

// OPTIONS preflight için
app.options('*', cors());

// ✅ Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ✅ Routes
app.use('/api/tours', tourRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/ai-guide', aiGuideRoutes);
// ✅ MongoDB bağlantısı
mongoose
  .connect('mongodb://localhost:27017/travel-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB bağlantısı başarılı'))
  .catch(err => console.error('MongoDB bağlantı hatası:', err));

// ✅ Hotel modeli
const hotelSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  price: Number,
  image: String,
  rating: Number,
  category: String,
  stars: Number,
  website: String,
  amenities: [String],
  source: String,
  lastUpdated: String,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

// ✅ Test endpoint
app.get('/test', (req, res) => {
  res.json({message: 'API çalışıyor!'});
});

// ✅ Otel listeleme
app.get('/api/hotels', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Oteller alınamadı'});
  }
});

// ✅ Kategori filtreleme
app.get('/api/hotels/category/:category', async (req, res) => {
  try {
    const hotels = await Hotel.find({category: req.params.category});
    res.json(hotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Kategoriye göre oteller alınamadı'});
  }
});

// 🔁 Örnek veri ekleme (örnek veri gerekiyorsa sampleHotels değişkeni tanımlanmalı)
app.post('/api/hotels/seed', async (req, res) => {
  try {
    await Hotel.deleteMany();

    // Örnek otel verileri
    const sampleHotels = [
      {
        title: 'Örnek Otel 1',
        description: 'Güzel bir otel',
        location: 'İstanbul, Türkiye',
        price: 500,
        image: 'https://example.com/hotel1.jpg',
        rating: 4.5,
        category: 'deluxe',
        stars: 5,
        website: 'https://example.com',
        amenities: ['WiFi', 'Havuz', 'Spa'],
        source: 'test',
        lastUpdated: new Date().toISOString(),
      },
      {
        title: 'Örnek Otel 2',
        description: 'Harika bir otel',
        location: 'Antalya, Türkiye',
        price: 300,
        image: 'https://example.com/hotel2.jpg',
        rating: 4.0,
        category: 'aquapark',
        stars: 4,
        website: 'https://example.com',
        amenities: ['WiFi', 'Aquapark'],
        source: 'test',
        lastUpdated: new Date().toISOString(),
      },
    ];

    const result = await Hotel.insertMany(sampleHotels);
    res.json({message: 'Veriler eklendi', hotels: result});
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Veri ekleme hatası'});
  }
});

// 404 fallback
app.use((req, res) => {
  res.status(404).json({error: 'Sayfa bulunamadı'});
});

// ✅ Tek app.listen() kullan
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
  console.log(`Network IP: http://192.168.6.36:${PORT}`);
});
