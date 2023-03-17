require('dotenv').config();
const express = require('express');
const { conn } = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

conn.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`); // eslint-disable-line no-console
    });
});