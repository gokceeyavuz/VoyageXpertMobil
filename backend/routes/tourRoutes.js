const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

// 🧳 Tüm tur verilerini getir
router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (error) {
    console.error('Turlar alınırken hata:', error);
    res.status(500).json({ error: 'Turlar alınamadı' });
  }
});

module.exports = router;
