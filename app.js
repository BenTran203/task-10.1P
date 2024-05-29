const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

mongoose.connect('mongodb://mongo:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

const itemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model('Item', itemSchema);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
