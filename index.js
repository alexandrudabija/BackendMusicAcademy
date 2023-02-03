
const express =require('express'); 
const cors = require('cors');
const connectDB = require('./db/connection');
// Import Routes 
const authRoute = require('./routes/auth');
const user= require('./routes/user')
const product=require('./routes/product');
const order=require('./routes/order');


const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(cors({
  origin: "https://alexandrudabija.github.io",
  allowedHeaders: ["Content-Type", "Authorization", "noauth"],
}));
 app.use(express.json());



//  

// connect to Db
connectDB();


// Middlewares

// Route Middlewares
app.use('/api/auth',authRoute);
app.use('/api/userProfile',user);
app.use('/api/order',order);
app.use('/api/product',product);


const Port = process.env.Port || 3000;

app.listen(Port); 