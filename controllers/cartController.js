const Cart = require('./../model/cartModels')
// const AppError = require('../utils/appError')

exports.getAllCart = async (req, res, next) => {
    try {
        const cart = await Cart.find()
        res.status(200).json({data: cart, status: 'success'})
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}

exports.createCart = async (req,res) => {
    try {
        // console.log(req.body)

        const cart = await Cart.create(req.body);
        res.json({data: cart, status : "success"});
    } catch (err) {
        res.status(500).json({error : err.message});
    }
}

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
        res.json({ data : cart, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

exports.updateCart = async(req,res) => {
    try{
        const cart = await Cart.findByIdAndDelete(req.params.id); //(req.params.id) send by cart
        res.json({data: cart, status : "success"});
    } catch (err) {
        res.status(500).json({error : err.message});
    }
}

exports.deleteCart = async(req, res) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id);
        res.json({ data : cart, status: 'success'});

    }catch (err) {
        res.status(500).json({error: err.message})
    }
}
