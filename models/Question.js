const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    question : {
        type : String
    }
});

module.exports  = mongoose.model('Question',QuestionSchema);
