const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const errorHandler = require('./middleware/error')

// Load env vars
dotenv.config({path: './config/config.env'})

// Connect to database
connectDB().then(r => {
    console.log(r);
});

// Route files
const bootcamps = require('./routes/bootcamps');
const questions = require('./routes/question');


const app = express();

// Body parser
app.use(express.json());

// This is custom middleware
app.use(logger);
// This is a Development Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// mount routes
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/questions', questions);

app.use(errorHandler);

const PORT = process.env.PORT || 3000

const server = app.listen(
    PORT,
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
    )
);


// Handle unhandled promise rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error : ${err.message}`.red.bold);
    // Close server and exit process
    server.close(()=> process.exit(1));
})
