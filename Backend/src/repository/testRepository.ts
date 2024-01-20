import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const newUser = async () => {
    return prisma.user.create({
        data: {
            firstName: "test",
            lastName: "test last name",
            password: "password",
            username: "username",
            userItineraries: {
                create: {
                    budget: 1000,
                    title: "test",
                }
            }
        }
    });
}

export const getUser = async () => {
    return prisma.user.findFirst({
        where: {
            userId: 1,
        }
    })
}

export const createUserItinerary = async () => {
    console.log("running 2")
    return prisma.itinerary.create({
        data: {
            budget: 1000,
            title: "lol",
            user: {},
            country: {},
            destination: {}
        }
    })
}

export const connectIternaryToCountry = async () =>{
    return prisma.country.create({
        data: {
            name: "test connect",
            iternaries: {
                create: {
                    budget: 1000,
                    title: "heLLO",
                    user: {
                        create: {
                            firstName: "hello",
                            lastName: "asdasd",
                            password: "passworddddd11111111111111111",
                            username: "asdasdasda"
                        }
                    }
            }
            }
        }
    })
}


export const createCountry = async () => {
    console.log("running 3")
    return prisma.country.create({
        data: {
            name: "hello",
            iternaries: {},
            destinations: {},
        }
    })
}

export const createDestination = async () => {
    console.log("running 4")
    return prisma.destination.create({
        data: {
            cost: 1000,
            name: "sadasd",
            notes: "asdasdasdad",
            country: {},
            itineraries: {}
        }
    })
}
