import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true }, // First Name
  mname: { type: String }, // Middle Name (optional)
  lname: { type: String, required: true }, // Last Name
  userType: {
    type: String,
    required: true,
    enum: ["customer", "merchant"],
  }, // User Type (Customer/Merchant (Admin))
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: { type: Map },
});

// User Model
const User = mongoose.model("User", userSchema);

export { User };
