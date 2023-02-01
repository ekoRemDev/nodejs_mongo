const express = require('express')
const {
    getQuestion,
    getQuestions,
    createQuestion
}  = require('../controllers/questions');

const questionRouter = express.Router();

questionRouter.route('/').get(getQuestions).post(createQuestion);
questionRouter.route('/:id').get(getQuestion);

module.exports = questionRouter;
