const express = require('express');
const app = express();
require('./dbconnect'); // MongoDB connection
const User = require('./model/usermodel.js');
const Product = require('./model/productModel.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./middleware/authMiddleware.js');
const upload = require('./middleware/upload'); // multer config

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

/* ========================
   SERVER START
======================== */
app.listen(9000, () => {
    console.log("Server Running On Port 9000");
});

/* ========================
   AUTH ROUTES
======================== */
// Register
app.post('/register', async (req, res) => {
    try {
        const { fullname, email, password, role } = req.body;
        if (!fullname || !email || !password) {
            console.log(req)
            return res.status(400).json({ message: "All fields are required" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ fullname, email, password: hashedPassword, role });

        res.status(201).json({ message: "User registered", user: newUser });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// Login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, role: user.role }, "secretkey", { expiresIn: "1d" });
        res.json({ message: "Login success", token, user });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

/* ========================
   PRODUCT ROUTES
======================== */
// Add Product
app.post('/add-product', upload.single("image"), async (req, res) => {
    try {
        const { title, description, price, oldPrice } = req.body;
        const image = req.file ? req.file.filename : null;

        if (!title || !price) {
            return res.status(400).json({ message: "Title and Price are required" });
        }

        const newProduct = await Product.create({ title, description, price, oldPrice, image });
        res.status(201).json({ message: "Product Created", product: newProduct });
    } catch (err) {
        console.error("Product add error:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// Get All Products
app.get('/get-products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// Update Product
app.put('/update-product/:id', upload.single("image"), async (req, res) => {
    try {
        const updateData = req.body;
        if (req.file) {
            updateData.image = req.file.filename;
        }

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

        res.status(200).json({ message: "Product updated", product: updatedProduct });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// Delete Product
app.delete('/delete-product/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: "Product not found" });

        res.json({ message: "Product deleted", product: deletedProduct });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});
