const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({path: './config/config.env'})

const app = express();


app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).send({'success': true, 'msg': 'Show all Bootcamps'});
});

app.post('/api/v1/bootcamp', (req, res) => {
    res.status(200).send({'success': true, 'msg': 'Create a new Bootcamp'});
});

app.put('/api/v1/bootcamp/:id', (req, res) => {
    res.status(200).send({'success': true, 'msg': `Update Bootcamp ${req.params.id}`});
});

app.delete('/api/v1/bootcamp/:id', (req, res) => {
    res.status(200).send({'success': true, 'msg': `Delete Bootcamp ${req.params.id}`});
});


const PORT = process.env.PORT || 6000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mpde on port ${PORT}`));
