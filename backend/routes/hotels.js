import express from 'express'
import { createHotel,getHotel ,getAllHotels, byCity, byType } from '../controllers/hotels.js';
import { isAdmin } from '../utils/verityToken.js';
const router = express.Router();
// For add new hotel
router.post('/',isAdmin ,createHotel)
// For get new hotel
router.get('/find/:id', getHotel)

// For get all hotels
router.get('/',getAllHotels)
router.get('/bycity', byCity)
router.get('/bytype', byType)
 export default router