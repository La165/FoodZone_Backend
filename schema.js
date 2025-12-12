const mongoose = require("mongoose");

// Product Schema
const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  image: String,
  des: String,
});

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  resetToken: String,             // NEW: token for password reset
  resetTokenExpiry: Date,         
});

// Order Schema
const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: false },
    items: [
      {
        id: Number,
        name: String,
        price: Number,
        quantity: Number,
        image: String,
        subtotal: Number,
      },
    ],
    totalMRP: Number,
    discountAmount: Number,
    couponDiscount: Number,
    gstAmount: Number,
    deliveryCharges: Number,
    finalPayableAmount: Number,
    status: {
      type: String,
      enum: ["Pending", "Preparing", "Out for Delivery", "Delivered", "Cancelled"],
      default: "Pending",
    },
    paymentMethod: {
      type: String,
      enum: ["Cash on Delivery", "UPI", "Card"],
      default: "Cash on Delivery",
    },
    deliveryAddress: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = { productSchema, orderSchema, userSchema };
