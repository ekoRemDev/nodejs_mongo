const mongoose = require('mongoose');

const connectDB = async ()=>{
    const conn = mongoose.connect('mongodb+srv://ekrem123:ekrem123@devcamper.gi15vak.mongodb.net/devcamper?retryWrites=true&w=majority', {
        useNewUrlParser:true,
        // useCreateIndex:true,
        // useFindAndModify:false
    });

    // console.log(`MongoDB Connected ${conn.connection.host}`.yellow)
}

module.exports = connectDB;
