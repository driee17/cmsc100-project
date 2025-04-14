import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productID: { type: String, required: true }, // Product ID
  productName: { type: String, required: true }, // Product Name
  imgurl: {type: String},
  url: {type: String},
  productDesc: { type: String, required: true }, // Product Description
  productType: { type: String, required: true }, // Product Type
  productQuan: { type: Number, required: true }, // Product Quantity
  productPrice: { type: Number, required: true }
});
// Product Model
const Product = mongoose.model("Product", productSchema);

export { Product };
