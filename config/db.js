const mongoose = require('mongoose');

const connectDB = async ()=>{
    const conn = mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        // useCreateIndex:true,
        // useFindAndModify:false
    });

    // console.log(`MongoDB Connected ${conn.connection.host}`.yellow)
}

module.exports = connectDB;
