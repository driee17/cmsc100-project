import { User } from "../models/userSchema.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const SECRET_KEY = "secret";

const postRegister = async (req, res) => {
  try {
    const { email, password, fname, mname, lname, userType } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const cart = new Map();
    const newUser = new User({ fname, mname, lname, userType, email, password: hashPassword, cart });
    await newUser.save();
    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    res.status(500).json({ error: "Error signing up." });
  }

};

//Get Request
const getRegister = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json({ users });
  } catch (error) {
    res.status(500).json({ error: "Unable to get users." });
  }

};

//Login
const login = async (req, res) => {

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials." });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials." });
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1hr",
    });
    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }

};

export { login, getRegister, postRegister };
