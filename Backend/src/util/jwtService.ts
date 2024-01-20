import {User} from '@prisma/client';

require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
/*Payload*/
const accessTokenExpiry = process.env.ACCESS_TOKEN_EXPIRY;

/*
 * Generate a hashed password based on the HS256 algorithmn, note that the same password may generate a different hash
 * each time due to a variable salt added to each generate. Please only use bcrypt compare to check the password
 * */
const genHashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 10);
};

const validateUsername = async (username: string, usernameFromDB: string): Promise<boolean> => {
    return (await usernameFromDB) == username;
};

/*
 * Note that for bcrypt.compare to work, it has to accept the plain text as the first param
 * and hashedPassword as the second, exclusively in that order to work
 * Hash password is the hashed password stored in the DB
 * */
const validatePassword = async (plainTextPassword: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
};

/*
 * When signing token, you will need the following information:
 * 1. information to pass usually account details
 * 2. secret key
 * 3. expiryIn (Do not change the key value)
 *
 * // Store the following settings properly
 * */
const issueAccessToken = (foundUser: User): string => {
    const payload = {
        userId: foundUser.userId,
        username: foundUser.username,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName
    };
    return jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
        // Important this is correct else, there will be not authenticate error even with the same secret
        {expiresIn: accessTokenExpiry}
    );
};


export {genHashPassword, validatePassword, issueAccessToken, validateUsername};
