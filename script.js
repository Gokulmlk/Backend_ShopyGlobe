const express = require("express")
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();// Load environment variables

connectDB();// Connect to MongoDB

const app = express()// Initialize Express app

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes

// Welcome route


app.use(errorHandler);// Error handler middleware 

const PORT = process.env.PORT || 3001

//Start Server 
app.get("/", (req,res)=> {
    res.send("Hello from the server")
})

app.listen(PORT, ()=>{
    console.log(`Server is running in the ${PORT}`)
})
