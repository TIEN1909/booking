import express from 'express'
import { verifyToken, verifyUser,isAdmin } from '../utils/verityToken.js';
import { getUser,getAllUsers} from '../controllers/users.js';
const router = express.Router();
// for login
// router.get('/checkauth', verifyToken, (req, res, next)=> {
//     res.send('You are logged In !')
// })
// // for login and you can delete you account
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send('You are Logged In and You can delete account!')
// });
// For get user by id
router.get('/:id', verifyUser, getUser)

// For get all users -> for admin section, but i dont working admin panel for this, only admin can see all users
router.get('/',isAdmin, getAllUsers)

 export default router