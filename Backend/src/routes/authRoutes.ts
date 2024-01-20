
import {NextFunction, Request, Response} from 'express';
import {handleLogin, handleRegister} from "../controllers/authController";
import passport from "passport";
const express = require('express');
const router = express.Router();

router.post('/login',  handleLogin)

router.post('/register', handleRegister)
router.post('/test',  [passport.authenticate('jwt', {session: false, failWithError: true})], (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(["hello", "something", "thing is fine", "new item", "new item 2"])
});

export default  router;
