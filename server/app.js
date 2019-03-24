require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const helmet = require('helmet');
const passport = require('passport')
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
//SETUP MONGOOSE
mongoose.connect(process.env.DB_ADDRESS,{useNewUrlParser: true} , () => {
  console.log(`SUCCESSFULLY CONNECTED: DB_ADDRESS ${process.env.DB_ADDRESS}`)
});
require('./models/UserSchema');


//EXPRESS SETUP
const PORT = process.env.PORT || 3000;
const output = path.join(__dirname, '..', 'client', 'public');
const app = express();

//middlewares
//ORDER IMPORTANT
app.use(cookieParser());
app.use(expressSession({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true }))

app.use(helmet());
app.use(express.static(output));
app.use(require('./routes'));


//PASSPORT SETUP
const configurePassport = require('./config/passport');
configurePassport(app, passport)


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

//MIDDLEWARE ORDER
/**
 *  middleware: {
    order: [
      'cookieParser',
      'session',
      'passport',
      'passportSession',
      'bodyParser',
      'handleBodyParserError',
      'methodOverride',
      'poweredBy',
      '$custom',
      'router',
      'www',
      'favicon',
      '404',
      '500'
    ]
  }
 */
