import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoutes from './routes/auth.js'
import hotelsRoutes from './routes/hotels.js'
import usersRoutes from './routes/users.js'
import roomsRoutes from './routes/rooms.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
// create port for backend (tạo cổng)
const app = express();

dotenv.config();

const connect = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to DB");
    
    } catch(error) {
        throw error
    }

}
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/hotels', hotelsRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/rooms', roomsRoutes)

 app.listen(5000,() =>{
   connect()
    console.log('Connect !')  //nodemon is to work all the time backend
 })



 