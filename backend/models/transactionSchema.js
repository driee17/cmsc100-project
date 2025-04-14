import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

  transID: { type: String, required: true }, // Transaction ID
  orders: { type: Map, required: true }, //keys are the product id and the values are the quantity
  // productID: { type: String, required: true }, // Product ID (ID reference to the product)
  // orderQuan: { type: String, required: true }, // Order Quantity
  orderStat: { type: Number, required: true, enum: [0, 1, 2] }, // Order Status (0 - pending, 1 - completed, 2 - canceled)
  email: { type: String, required: true }, // Email (ID reference to the user)
  date: { type: Date, required: true }, // Date and Time ordered
});
// Product Model
const Transaction = mongoose.model("Transaction", orderSchema);

export { Transaction };
