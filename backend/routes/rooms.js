import express from 'express'
import { createRoom,getRoom,getAllRooms } from '../controllers/rooms.js';
import { isAdmin } from '../utils/verityToken.js';
const router = express.Router();
router.post('/:hotelId',isAdmin, createRoom) // only als admin login can you add hotels
router.get('/:id',getRoom)
router.get('/',getAllRooms)
 export default router