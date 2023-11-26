const Feedback = require('./../model/feedbackModels')
// const AppError = require('../utils/appError')

exports.getAllFeedback = async (req, res, next) => {
    try {
        const feedback = await Feedback.find()
        res.status(200).json({data: feedback, status: 'success'})
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}

exports.createFeedback = async (req,res) => {
    try {
        // console.log(req.body)

        const feedback = await Feedback.create(req.body);
        res.json({data: feedback, status : "success"});
    } catch (err) {
        res.status(500).json({error : err.message});
    }
}

exports.getFeedback= async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        res.json({ data : feedback, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

exports.updateFeedback = async(req,res) => {
    try{
        const feedback = await Feedback.findByIdAndDelete(req.params.id); //(req.params.id) send by feedback
        res.json({data: feedback, status : "success"});
    } catch (err) {
        res.status(500).json({error : err.message});
    }
}

exports.deleteFeedback = async(req, res) => {
    try {
        const feedback = await Feedback.findByIdAndDelete(req.params.id);
        res.json({ data : feedback, status: 'success'});

    }catch (err) {
        res.status(500).json({error: err.message})
    }
}
