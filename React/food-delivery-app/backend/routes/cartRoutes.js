import express from 'express';
import {
    addToCart,
    updateCartItem,
    getCart,
    removeCartItem,
    clearCart
} from '../controllers/cartController.js';

const router = express.Router();

router.post('/add', addToCart);
router.put('/update/:itemId', updateCartItem);
router.delete('/remove/:itemId', removeCartItem);
router.get('/:customerId', getCart);
router.delete('/clear/:customerId', clearCart);

export default router;

