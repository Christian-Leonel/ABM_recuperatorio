const express = require('express');
const path = require('path');
const app = express();

const mainRouter = require('./routes/mainRouter');
const usersRouter = require("./routes/usersRouter");

const methodOverride =  require('method-override');
const cookieParser = require("cookie-parser");
const session = require('express-session');
const bcrypt = require('bcryptjs');

const sessionMiddleware = require("./middlewares/sessionMiddleware");
app.use(sessionMiddleware);


app.use(express.static('public'));



app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname, '/views'),path.join(__dirname, '/views/users'),]);

app.listen(3070, ()=>console.log("Todo OK!!"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({secret: "Shhh, It's a secret",resave: false,saveUninitialized: false,}));



app.use("/",usersRouter);
app.use('/', mainRouter);


module.exports = app;