const Order = require('./../model/orderModels')
// const AppError = require('../utils/appError')

exports.getAllOrder = async (req, res, next) => {
    try {
        const order = await Order.find()
        res.status(200).json({data: order, status: 'success'})
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}

exports.createOrder = async (req,res) => {
    try {
        // console.log(req.body)

        const order = await Order.create(req.body);
        res.json({data: order, status : "success"});
    } catch (err) {
        res.status(500).json({error : err.message});
    }
}

exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.json({ data : order, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

exports.updateOrder = async(req,res) => {
    try{
        const order = await Order.findByIdAndDelete(req.params.id); //(req.params.id) send by Order
        res.json({data: order, status : "success"});
    } catch (err) {
        res.status(500).json({error : err.message});
    }
}

exports.deleteOrder = async(req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        res.json({ data : order, status: 'success'});

    }catch (err) {
        res.status(500).json({error: err.message})
    }
}
