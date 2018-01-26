const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/HotelController');

router.get('/all', hotelController.getHoteles);

module.exports = router;