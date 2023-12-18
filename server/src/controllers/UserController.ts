import { Request, Response } from 'express';
import { connectDB } from '../dataSource';
import { User } from '../entities/User';

export class UserController {
    static async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const userRepository = connectDB.getRepository(User);
            const users = await userRepository.find();
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while fetching users.");
        }
    }
}
