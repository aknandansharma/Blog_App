const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');



// reset objects
const app = express();

// dotenv config
dotenv.config();

// connect to database
connectDB();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello World'
    })
})

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgMagenta.white)
})