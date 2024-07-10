const express = require('express');
const axios = require('axios');
const app = express();

// Configuration
const WINDOW_SIZE = 10;
const TIMEOUT = 500; // 500 milliseconds

// Storage
let numbersWindow = [];

// Helper functions
const fetchNumbers = async (numberType) => {
  const url = `http://third-party-server/numbers/${numberType}`; // Update with the actual third-party server URL
  try {
    const response = await axios.get(url, { timeout: TIMEOUT });
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

app.get('/numbers/:numberType', async (req, res) => {
  const { numberType } = req.params;

  if (!['p', 'f', 'e', 'r'].includes(numberType)) {
    return res.status(400).json({ error: 'Invalid number type' });
  }

  const windowPrevState = [...numbersWindow];
  const numbers = await fetchNumbers(numberType);

  if (numbers) {
    numbers.forEach((number) => {
      if (!numbersWindow.includes(number)) {
        if (numbersWindow.length >= WINDOW_SIZE) {
          numbersWindow.shift(); // Remove the oldest number
        }
        numbersWindow.push(number); // Add the new number
      }
    });
  }

  const windowCurrState = [...numbersWindow];
  const avg = numbersWindow.length > 0
    ? (numbersWindow.reduce((acc, num) => acc + num, 0) / numbersWindow.length).toFixed(2)
    : null;

  res.json({
    windowPrevState,
    windowCurrState,
    numbers,
    avg,
  });
});

const PORT = process.env.PORT || 9876;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
