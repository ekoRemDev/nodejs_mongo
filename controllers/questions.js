const Question = require('../models/Question');

const asyncHandler = require('../middleware/async');
const ErrorResponse = require("../util/errorResponse");
const Bootcamp = require("../models/Bootcamp");

exports.getQuestions = asyncHandler(async (req, res, next) => {
    const questions = await Question.find();

    res.status(200).json({
        success: true,
        count: questions.length,
        data: questions,

    })
});

exports.getQuestion = asyncHandler(async (req, res, next) => {
    const question = await Question.findById(req.params.id);

    if (!question) {
        return next(new ErrorResponse('Question not found', 400));
    }

    res.status(200).json({
        success: true,
        data: question
    })
});

exports.createQuestion = asyncHandler(async (req, res, next)=>{
    const question = await Question.create(req.body);

    res.status(201).json({
        success: true,
        data: question,
    });
})
