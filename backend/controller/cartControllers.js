const { Cart } = require('../config/db');

const saveCart = async (req, res) => {
    try {
        const data = req.body;
        await Cart.create( { data } );
        res.status( 200 ).send( 'Cart created succesfully!' );
    } catch (error) {
        console.log( error );
        res.status(500).json({message: 'Server Error'});
    }
}

const getCarts = async (req, res) => {
    try {
        const carts = await Cart.findAll({});
        return res.json( carts );
    } catch (error) {
        console.error( error );
        res.status(500).json({message: 'Server Error'})
    }
}

module.exports = {
    saveCart,
    getCarts
}