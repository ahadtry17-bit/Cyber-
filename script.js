const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Static files (HTML, CSS, JS) ke liye
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<h1>Tiger ka Free Fire Aimbot Panel zinda hai! 🐅🔥</h1>');
});

// Free Fire cheat / connect logic yahan aayega
app.get('/connect-game', (req, res) => {
  res.json({ status: 'success', message: 'Aimbot injected successfully! Headshot rate: 100%' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```