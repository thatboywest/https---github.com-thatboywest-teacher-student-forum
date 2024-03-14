const mongoose = require('mongoose');

const connectDB = async () => {
    const url = 'mongodb+srv://victor:vic254@cluster0.2uok2rm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Some error occurred while connecting to DB");
        console.log(error);
    }
}

module.exports = { connectDB };
