const express = require("express")
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');




dotenv.config();// Load environment variables


connectDB();// Connect to MongoDB

const app = express()// Initialize Express app


app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

const PORT = process.env.PORT || 3001

app.get("/", (req,res)=> {
    res.send("Hello from the server")
})

app.listen(PORT, ()=>{
    console.log(`Server is running in the ${PORT}`)
})
