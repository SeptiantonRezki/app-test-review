const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/convertDecimalToBinary', userController.convertDecimaltoBinary);
router.post('/convertBinaryToDecimal', userController.convertBinarytoDecimal);
router.post('/palindrome', userController.getPalindrome);

module.exports = router;
