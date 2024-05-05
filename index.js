const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model');

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome, server is up to date');
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

app.get('/api/products/:id', async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

mongoose.connect('mongodb+srv://haktancantaskiran:Ph33231!@backenddb.kucsmzc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected to DB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((err) => {
        err => 'Connection Failed'
        console.log(err);
    });