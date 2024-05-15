import express from 'express';
import userRoute from './user';
import symbolRoute from './symbol';
import wishlistRoute from './wishlist'


const router = express.Router();
export default router;

router.use('/user', userRoute);

router.use('/wishlist', wishlistRoute);

router.use('/symbol', symbolRoute);