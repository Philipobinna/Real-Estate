import express from 'express';
import { register, updateUser} from '../controllers/userController.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.get('/register', register);
router.post('/update/:id', verifyToken, updateUser);

export default router;
