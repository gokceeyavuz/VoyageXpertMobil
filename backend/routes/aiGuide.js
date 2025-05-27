const express = require('express');
const router = express.Router();
require('dotenv').config();
const guideData = require('../data/localGuides.json');
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/', async (req, res) => {
  const {city, question} = req.body;
  const guide = guideData.find(
    g => g.location.toLowerCase() === city.toLowerCase(),
  );

  if (!guide)
    return res.status(404).json({reply: 'Bu şehir için rehberimiz yok 💔'});

  const prompt = `
${guide.intro}
Sen ${
    guide.location
  } hakkında bilgi veren AI yerel rehberisin. Cevaplarını sıcak, arkadaşça ve rehber havasında ver.

- Gezilecek yerler: ${guide.must_see.join(', ')}
- Ulaşım: ${guide.transport}
- Yemekler: ${guide.food.join(', ')}
- İpuçları: ${guide.tips}

Kullanıcı soruyor: ${question}
Rehber ${guide.name} olarak cevabın:
`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {role: 'system', content: 'Sen yerel bir seyahat rehberisin.'},
        {role: 'user', content: prompt},
      ],
      temperature: 0.8,
      max_tokens: 100,
    });

    console.log('--- Completion:', completion); // 💥 BURASI HATAYI GÖSTERECEK

    const answer = completion.choices?.[0]?.message?.content?.trim();

    if (!answer) throw new Error('AI response is empty');

    res.json({reply: answer});
  } catch (error) {
    console.error('AI HATA:', error);
    res.status(500).json({reply: 'AI cevap verirken sorun oluştu.'});
  }
});

module.exports = router;
