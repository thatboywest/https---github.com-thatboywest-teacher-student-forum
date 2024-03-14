const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const loginRouter=require("./Routes/login");
const questionRouter = require('./Routes/questions')
const signupRouter = require('./Routes/signupRoute')
// Connect to MongoDB
mongoose.connect('mongodb+srv://victor:vic254@cluster0.2uok2rm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Welcome to the root of the application!');
  });
// Include your routes
app.use('/api/login',loginRouter)
app.use('/api/signup', signupRouter)
app.use('/api/questions',questionRouter)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
