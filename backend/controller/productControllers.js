const { Product } = require('../config/db');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({});

        return res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

module.exports = {
    getAllProducts,
    getProductById
}