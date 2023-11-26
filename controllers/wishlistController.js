const Wishlist = require('./../model/wishlistModels')
// const AppError = require('../utils/appError')

exports.getAllWishlist = async (req, res, next) => {
    try {
        const wishlist = await Wishlist.find()
        res.status(200).json({data:wishlist, status: 'success'})
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}

exports.createWishlist = async (req,res) => {
    try {
        // console.log(req.body)

        const wishlist = await Wishlist.create(req.body);
        res.json({data: wishlist, status : "success"});
    } catch (err) {
        res.status(500).json({error : err.message});
    }
}

exports.getWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.findById(req.params.id);
        res.json({ data : wishlist, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

exports.updateWishlist = async(req,res) => {
    try{
        const wishlist = await Wishlist.findByIdAndDelete(req.params.id); //(req.params.id) send by Wishlist
        res.json({data: wishlist, status : "success"});
    } catch (err) {
        res.status(500).json({error : err.message});
    }
}

exports.deleteWishlist = async(req, res) => {
    try {
        const wishlist = await Wishlist.findByIdAndDelete(req.params.id);
        res.json({ data : wishlist, status: 'success'});

    }catch (err) {
        res.status(500).json({error: err.message})
    }
}
