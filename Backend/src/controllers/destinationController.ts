import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//READ OPERATIONS
export const getAllDestination = async (req, res) => {
    try {
        const result = await prisma.destination.findMany({});
        res.send(result);
        res.status(200).json({ success: true, data: result });
      } catch (error) {
        console.error(error);
      }
};

