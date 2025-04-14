import { User } from "../models/userSchema.js";
import { Product } from "../models/productSchema.js";
import { Transaction } from "../models/transactionSchema.js";

var transactionId = 0;

const listUser = async (req, res) => {
  try {
    const allusers = await User.find(); // Retrieve all users from the database
    res.status(200).send(allusers); // Send the users as the response
  } catch (error) {
    console.error(error); // Log any errors to the console
    res.status(500).send({ message: 'Internal Server Error', error: error.message }); // Send an error response
  }
};

const StorePage = async (req, res) => {
  try {
    const products = await Product.find().sort({productname:1});
    res.status(200).send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error', error: error.message });
  }
};

const Checkout = async (req, res) => {
  try {
    const { email } = req.body;

    // Await the user search
    const customer = await User.findOne({ email });

    if (!customer) {
      return res.status(404).send({ inserted: false, message: "User not found" });
    } else if (customer.cart.size == 0){
      return res.status(404).send({ inserted: false, message: "Cart empty" });
    }

    // Get the current date and time
    const dateTime = new Date();

    // Create the transaction record
    const data = await Transaction.create({
      transID: transactionId,
      orders: customer.cart,
      orderStat: 0,
      email: customer.email,
      date: dateTime.toISOString(),
    });

    // Clear the user's cart if transaction is successfully created
    if (data) {
      customer.cart = []; // Clear the cart
      await customer.save(); // Save the updated user data
      transactionId += 1;
      res.send({ inserted: true, transID: transactionId-1 });
    } else {
      res.send({ inserted: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ inserted: false, error: error.message });
  }
};


const AddInventory = async (req, res) => {
  try {
    const { productID,productName,imgurl,url,productDesc,productType,productQuan,productPrice } = req.body; // Assuming productId and quantity are sent in the body

    // Add items to inventory
    const product = await Product.findOne({productID});
    if (!product) {
        const newProduct = new Product({productID,productName,imgurl,url,productDesc,productType,productQuan, productPrice });
        await newProduct.save();
    } else {
        product.productQuan += productQuan;
        await product.save();
    }
    res.json({ message: "Items added successfully", product });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

const RemoveInventory = async (req, res) => {
    try {
      const { productID, productQuan } = req.body; // Assuming productID and quantity are sent in the body
        
    const product = await Product.findOne({productID});
    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    if (product.productQuan< productQuan) {
        return res.status(400).json({ error: "Insufficient stock" });
    }
    // Successful checkout (remove items from inventory)
    product.productQuan -= productQuan;
    await product.save();
    res.json({ message: "Checkout successful", product });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
  };

const confirmorder = async (req, res) => {//admin
  try {
    const { transID } = req.body;

    const order = await Transaction.updateOne({ transID },
      {$set:{orderStat:1}}
    );

    const order_existing = await Transaction.findOne({ transID });
    if (!order_existing) {
      return res.status(404).send({ inserted: false, message: "Order not found" });
    }

    res.status(200).send({ inserted: true, message: "Order confirmed" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ inserted: false, error: error.message });
  }
};

const cancelOrder = async(req,res) =>{
  try {
    const { transID } = req.body;

    const order = await Transaction.updateOne({ transID },
      {$set:{orderStat:2}}
    );

    const order_existing = await Transaction.findOne({ transID });
    if (!order_existing) {
      return res.status(404).send({ inserted: false, message: "Order not found" });
    }
    
    res.status(200).send({ inserted: true, message: "Order canceled" });
    
  } catch (error) {
    console.error(error);
    res.status(500).send({ inserted: false, error: error.message });
  }

};

const addToCart = async (req, res) => {
  try {
    const { email, productID, quantity } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    // Add or update the product in the user's cart
    if (user.cart.has(productID)) {
      user.cart.set(productID, user.cart.get(productID) + quantity);
    } else {
      user.cart.set(productID, quantity);
    }

  
    await user.save();

    res.status(200).send({ message: 'Product added to cart', cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error', error: error.message });
  }
};

const UpdateInventoryUser = async (req, res) => {
  try {
    const { email, productID, quantity } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    // Check if the product exists in the user's cart
    if (user.cart.has(productID)) {
      // Reduce the quantity
      const updatedQuantity = user.cart.get(productID) - quantity;

      if (updatedQuantity > 0) {
        // Update the quantity if it's greater than 0
        user.cart.set(productID, updatedQuantity);
      } else {
        // Remove the product if the quantity is 0 or less
        user.cart.delete(productID);
      }
    } else {
      // If the product is not in the cart, respond accordingly
      return res.status(400).send({ message: 'Product not found in cart' });
    }

    // Save the updated cart
    await user.save();

    res.status(200).send({ message: 'Product quantity updated in cart', cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error', error: error.message });
  }
};

const salesReport = async(req,res) =>{
 
    try {
      // Find all orders where orderStat is 1 (completed)
      const completedOrders = await Transaction.find({ orderStat: 1 });
  
      // Send the completed orders as the response
      res.status(200).send(completedOrders);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }

  
};

const pendingOrders = async(req,res) =>{
 
  try {
    // Find all orders where orderStat is 0 (pending)
    const pendingOrder = await Transaction.find({ orderStat: 0 });

    // Send the completed orders as the response
    res.status(200).send(pendingOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error', error: error.message });
  }


};

const cancelledOrders = async(req,res) =>{
 
  try {
    // Find all orders where orderStat is 0 (pending)
    const cancelOrder = await Transaction.find({ orderStat: 2 });

    // Send the completed orders as the response
    res.status(200).send(cancelOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error', error: error.message });
  }


};

const listProductsByType = async (req, res) => {
  try {
    const products = await Product.find().sort({ productType: 1 }); // 1 for ascending order

    // Send the sorted products as the response
    res.status(200).send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error', error: error.message });
  }
};

export { listProductsByType, StorePage, Checkout, AddInventory, RemoveInventory, listUser, confirmorder, cancelOrder, addToCart, salesReport, cancelledOrders, pendingOrders, UpdateInventoryUser };