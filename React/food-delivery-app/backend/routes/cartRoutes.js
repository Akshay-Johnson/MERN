import express from 'express';
import {
    addToCart,
    updateCartItem,
    getCart,
    removeCartItem,
    clearCart
} from '../controllers/cartController.js';

const router = express.Router();

router.post('/add', authMiddleware, addToCart);
router.put('/update/:itemId', authMiddleware, updateCartItem);
router.delete('/remove/:itemId', authMiddleware, removeCartItem);
router.get('/:customerId', authMiddleware, getCart);
router.delete('/clear/:customerId', authMiddleware, clearCart);

export default router;

