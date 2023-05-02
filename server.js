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

// Router Import
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')


// connect to database
connectDB();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/blog', blogRoutes)

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgMagenta.white)
})

