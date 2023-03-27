require('dotenv').config();
const express = require('express');
const { conn } = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const { DOMAIN } = process.env;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', `${ DOMAIN }`); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

conn.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`); // eslint-disable-line no-console
    });
});