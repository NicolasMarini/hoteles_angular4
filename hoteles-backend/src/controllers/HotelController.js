const express = require('express');
const app = express();
const hotel = require('../models/Hotel');

module.exports.getHoteles = (req, res, next) => {
    console.log(hotel.getHoteles);
    res.send(hotel.getHoteles());
}
