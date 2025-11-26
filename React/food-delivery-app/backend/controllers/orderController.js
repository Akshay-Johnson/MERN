import Cart from '../models/cartModel.js';
import Order from '../models/orderModel.js';

export const createOrder = async (req, res) => {
    try {
        const customerId= req.user.id;
        const { restaurantId, address } = req.boby;

        const cart = await Cart.findOne({ customerId });

        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: 'Cart is empty' });
        }       


    const order = await Order.create({
        customerId,
        restaurantId,
        items: cart.items,
        totalPrice: cart.totalPrice,
        address,
        status: 'Pending',
    });

    //clear cart after order
    cart.items = [];
    caches.totalPrice = 0;
    await cart.save();

    res.status(201).json({ message: 'Order created successfully', 
        order,
     });
    } catch (error) {
        res.status(500).json({ message: 'error creating order', error });
    }
};

//get orders for a customer
export const getMyOrders = async (req, res) => {
    try {
        const customerId = req.user.id;

        const orders = await Order.find({ customerId }).sort({ createdAt: -1 });
        
        res.status(200).json({ orders });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};

//get single order
export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        
        res.json({ order });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order', error });
    }
};

//track order status
export const trackOrderStatus = async (req, res) => {
    try {
        const oder = await Order.findById(req.params.id).select('status deliveryAgentId updatedAt'); 
       
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json({ order });
    } catch (error) {
        res.status(500).json({ message: 'Error tracking order status', error });
    }
};
