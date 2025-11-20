const router = require('express').Router();
const { getproducts} = require('../controllers/productController');

router.get('/', getproducts);
module.exports = router;