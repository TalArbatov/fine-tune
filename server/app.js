require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const helmet = require('helmet');

//SETUP MONGOOSE
mongoose.connect(process.env.DB_ADDRESS,{useNewUrlParser: true} , () => {
  console.log(`SUCCESSFULLY CONNECTED: DB_ADDRESS ${process.env.DB_ADDRESS}`)
});

//EXPRESS SETUP
const PORT = process.env.PORT || 3000;
const output = path.join(__dirname, '..', 'client', 'public');
const app = express();
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true }))
app.use(helmet());
app.use(express.static(output));
app.use(require('./routes'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})



