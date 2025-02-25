const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
require("./config/database")
const morgan = require('morgan');

//models

//controllers
const testJWTRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');
const profilesRouter = require('./controllers/profiles');

//
const verifyToken = require('./middleware/verify-token');
//=================================
//middleware
app.use(morgan('dev'));
app.use(express.json());

// Public Routes
app.use('/test-jwt', testJWTRouter);
app.use('/users', usersRouter);

//Protective Routs
app.use(verifyToken)
app.use('/profiles', profilesRouter);
//=============================================
app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000");
});