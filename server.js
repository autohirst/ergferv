
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const apiKey = 'F8GBPhkliFAokG2yokSkeNef0SHT4QnRPjAkKwzxWcPQFU8jNwbDT087XfCK';

const corsOptions = {
  origin: '*',
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
  exposedHeaders: ['Access-Control-Allow-Origin'],
};


app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/api/v3/text2img', async (req, res) => {
  const formData = req.body;
  console.log('Request Data:', formData);

  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify(formData),
    };
    console.log('Request Options:', requestOptions);

    const response = await fetch('https://stablediffusionapi.com/api/v3/text2img', requestOptions);
    console.log('Response Headers:', response.headers);

    const data = await response.json();
    console.log('Response Data:', data);

    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

app.post('/api/v3/fetch', async (req, res) => {
  const formData = req.body;
  console.log('Request Data:', formData);

  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify(formData),
    };
    console.log('Request Options:', requestOptions);

    const response = await fetch('https://stablediffusionapi.com/api/v3/fetch/', requestOptions);
    console.log('Response Headers:', response.headers);

    const data = await response.json();
    console.log('Response Data:', data);
    
    res.set('Access-Control-Allow-Origin', '*');
    res.json(data);
    updateImage(data.output[0]);
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});