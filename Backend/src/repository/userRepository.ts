import {prisma} from "../controllers/authController";
import {User} from "@prisma/client";
import passport from "passport";

export const getUserById = (userid: number) => {
    return prisma.user.findFirst({
        where: {
            userId: userid
        }
    })
}

export const getUserByUsername = async (username: string) => {
    return prisma.user.findFirst({
        where :{
            username: username
        }
    })
}

export const getUserByUsernameAndPassword = async (username: string, password: string) => {
    return prisma.user.findFirst({
        where: {
            username: username,
            password: password
        }
    })
}


export const createUser = async (username: string, password: string, firstname: string, lastName: string) => {
    return prisma.user.create({
        data: {
            firstName: firstname,
            lastName: lastName,
            username: username,
            password: password
        }
    })
}
