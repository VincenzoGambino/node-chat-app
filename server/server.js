require('./config/config');

const path = require('path');
const express = require('express');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;
const {authenticate} = require('./middleware/authenticate');


var app = express();

app.use(express.static(publicPath));


app.listen(port, () => {
  console.log('Started on port ' + port);
});



module.exports = {app};
// Set up

// Configure middleware

// Listen to 3000

//