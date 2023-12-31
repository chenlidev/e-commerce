import express from 'express';
import { UserController } from '../controllers/UserController';

const router = express.Router();

router.get('/users', UserController.getAllUsers);

export default router;
