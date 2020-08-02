const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/products', (req, res) => {

  const {APP_SHOPIFY_API_KEY,APP_SHOPIFY_SECRET_KEY} = process.env;
  request(
    { url: `https://${APP_SHOPIFY_API_KEY}:${APP_SHOPIFY_SECRET_KEY}@skutopia-test.myshopify.com/admin/api/2020-07/products.json` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      console.log(JSON.parse(body));
      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));