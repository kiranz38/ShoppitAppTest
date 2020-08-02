const express = require('express');
const request = require('request');

const app = express();


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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

      // postData(JSON.parse(body));
      res.json(JSON.parse(body));
    }
  )
});
var db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'ramkumark',
    password : process.env.APP_DB_PASSWORD,
    database : 'shoppitdb'
  }
});
app.get('/getProducts', (req, res) => getTableData(req, res, db));
app.post('/postProducts',(req,res)=>postTableData(req,res,db));

const getTableData = (req, res, db) => {
  db.select('*').from('ShopifyTable')
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}
const postData = (data) => {
  alert(data);
data.products.forEach(element => {
  const { title, created_at, body_html, vendor, id, src ,handle } = element;
  db('ShopifyTable').insert({stringId, body_html, src, title, handle, created_at, vendor})
    .returning('*')
    .then(item => {
      console.log("record inserted")
    })
    .catch(err => console.log('db error'));
});
}
const postTableData = (req, res, db) => {
  
  console.log(req);
  const { title, created_at, body_html, vendor, id, src ,handle } = req.body
  let stringId = id.toString();
  const added = new Date()
  db('ShopifyTable').insert({stringId, body_html, src, title, handle, created_at, vendor})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));