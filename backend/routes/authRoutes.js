const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Giriş yap
router.post('/login', async (req, res) => {
    const { email, password } = req.body; // ✅ email'e göre kontrol
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ success: false, message: 'Email kayıtlı değil.' });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ success: false, message: 'Şifre yanlış.' });
      }
  
      return res.json({ success: true, user });
    } catch (err) {
      res.status(500).json({ message: 'Sunucu hatası' });
    }
  });

// Kayıt ol
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existing = await User.findOne({ username });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Kullanıcı zaten var!' });
    }
    const newUser = new User({ username, password });
    await newUser.save();
    res.json({ success: true, user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Kayıt hatası' });
  }
});

module.exports = router;
