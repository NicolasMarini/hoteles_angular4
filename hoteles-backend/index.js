const polyfill = require('babel-polyfill');
const register = require('babel-register');
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const hotelRouter = require('./src/routes/HotelRouter');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/hoteles', hotelRouter);

/*
app.get('/posts', (req, res, next) => {
    let promise = new Promise((resolve, reject) => {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            //console.log(`data: ${res}`);
            console.log(res.data);
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })
    })
    return promise;
    next();
});
*/
app.listen(port);

console.log(`Express server listening at port ${port}`);
