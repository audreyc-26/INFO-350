const express = require('express');
const app = express();

const greeting = process.env.GREETING || 'Hello from your deployed app!';

app.get('/api/message', (req, res) => {
  res.json({ message: greeting });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});