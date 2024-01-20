import { PrismaClient } from '@prisma/client';
import {NextFunction, Request, Response} from 'express';
import { z } from 'zod';
import {createUser, getUserById, getUserByUsername} from "../repository/userRepository";
import {genHashPassword, issueAccessToken, validatePassword, validateUsername } from '../util/jwtService';

export const prisma = new PrismaClient()

export const UserSchema = z.object({
    username: z.string().min(1).max(100),
    password: z.string().min(1).max(100),
    firstName: z.string().min(1).max(100),
    lastName: z.string().min(1).max(100)
});

export const UserLoginSchema = z.object({
    username: z.string().min(1).max(100),
    password: z.string().min(1).max(100)
});

type User = z.infer<typeof UserSchema>;
type UserLogin = z.infer<typeof UserLoginSchema>;

export const handleLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Logic for logging in
        const userLogin: UserLogin = UserLoginSchema.parse(req.body);
        //Please remember the await else if there is a prisma error it will not catch it
        const user = await getUserByUsername(userLogin.username)
        const isPasswordValid = await validatePassword(userLogin.password, user.password);
        const isUsernameValid = await validateUsername(user.username, userLogin.username)
        if (!isPasswordValid) throw new Error('Invalid password');
        // User is valid, return JWT token
        const accessToken = issueAccessToken(user)
        res.status(200).json({accessToken: accessToken, firstName: user.firstName, lastName: user.lastName, userId: user.userId})
    } catch (e) {
        next(e)
    }
}

export const handleRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // If the req is missing anything, it will throw an error
        const user: User = UserSchema.parse(req.body);
        const createdUser = await createUser(user.username, await genHashPassword(user.password), user.firstName, user.lastName, );
        res.status(201).json();
    } catch (e) {
        // Pass on to global error handler
        console.log(e)
        next(e);
    }
}
