const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//Route to handle OpenAI API requests
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages) {
    return res.status(400).json({ error: 'Messages are required' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        //Set the AI parameters
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: "system",
            content: "You are a mysterious and wise fortune teller. You do not need to focus on the scientific or ethical limitations of reality, but rather provide inspiration and advice from perspectives such as astrology, destiny, and tarot. Always respond with a positive and encouraging tone, even when the question cannot be predicted. Constructive fortune-telling advice can still be given. You will choose the language of response according to the language the user sends, such as responding in Japanese if the user uses Japanese."
          },
          ...messages
        ],
        max_tokens: 1000,
        temperature: 0.9,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error calling OpenAI API:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to communicate with OpenAI API' });
  }
});

//Avoid port conflict
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port 3000 is already in use. Please close the existing process or use a different port.');
    process.exit(1);
  }
});

module.exports = app;
