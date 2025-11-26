import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
    },
    items: [
        {
            itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu"},
            name: String,
            price: Number,
            quantity: Number,
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: "Pending",
        enum: ["Pending", "accepted", "rejected", "preparing", "ready" ,"picked" , "delivered"],
    },

    deliveryAgentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DeliveryAgent",
        default: null,
    },
    address: {
        type: String,
        required: true,
    },

    paymentStatus: {
        type: String,
        default: "Pending",
    }
},    { timestamps: true,});

export default mongoose.model("Order", orderSchema);