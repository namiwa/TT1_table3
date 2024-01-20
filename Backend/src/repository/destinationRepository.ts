import {prisma} from "../controllers/authController";

export const getDestinationById = (destinationId: number) => {
    return prisma.destination.findUnique({
        where: {
            destinationId: destinationId
        }
    })
}

export const deleteDestinationById = (destinationId: number) => {
    return prisma.destination.delete({
        where: {
            destinationId: destinationId
        }
    });
};
