const express = require('express');
const request = require('request');

const app = express();
let AppCount = 1;

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
        if(AppCount === 1){
          postData(JSON.parse(body));
        }
       
       AppCount++;
       res.json(JSON.parse(body));
      // const tableData = getTableData();
      // console.log(tableData);
      // res.json(tableData);
    }
  )
});


const { Pool, Client } = require("pg");

const pool = new Pool({
  user: process.env.APP_USER,
  host: process.env.APP_HOST,
  database: process.env.APP_DB,
  password: process.env.APP_DB_PASSWORD,
  port: process.env.APP_SERVER_PORT
});

app.get('/getProducts', (req, res) => getTableData(req, res));


const getTableData = () => {
  let JSONData = {};
  pool.query(`SELECT * FROM ${process.env.APP_TABLE}`,(err,resp)=>{
    console.log(err);
    JSONData = resp;
  })
  return JSONData;
}
const postData = (data) => {
 data.products.forEach(element => {
  const { title, created_at, body_html, vendor, id, image ,handle } = element;
  let stringId = id.toString();
  
  const {src} = image ? image : data.products[0].image;
  pool.query(
    `INSERT INTO ${process.env.APP_TABLE}(id, body_html, image_src, title, handle, created_at, vendor) VALUES ('${stringId}', '${body_html}', '${src}', '${title}', '${handle}', '${created_at}', '${vendor}')`,
    (err, res) => {
      console.log(err, res);
       pool.end();
    }
  );
  
 });
}


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));