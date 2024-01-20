import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//READ OPERATIONS
export const getAllDestination = async (req, res) => {
    try {
        console.log(req.body)
        const result = await prisma.destination.findMany({});
        res.send(result);
        res.status(200).json({ success: true, data: result });
      } catch (error) {
        console.error(error);
      }
};

export const createDestination = async (req, res) => {
    try {
        const result = await prisma.destination.create({
            data: {
                destinationId: req.body.destinationId,
                destinationCountryId: req.body.destinationCountryId,
                cost: req.body.cost,
                name: req.body.name,
                notes: req.body.notes
            }
        })
        res.status(200).json({ "message": `sent` });
        res.json(result);
      } catch (error) {
        console.error(error);
      }
};

export const updateDestination = async (req, res)  => {
    try {
        const result = await prisma.destination.update({
            where: {
                destinationId: req.body.destinationId
            },
            data: {
                destinationId: req.body.destinationId,
                destinationCountryId: req.body.destinationCountryId,
                cost: req.body.cost,
                name: req.body.name,
                notes: req.body.notes
            }
        })
        res.status(200).json({ "message": `sent` });
        res.json(result);
      } catch (error) {
        console.error(error);
    }
}

export const deleteDestination = async (req, res)  => {
    try {
        const result = await prisma.destination.delete({
            where: {
                destinationId: req.body.destinationId
            }
        })
        res.status(200).json({ "message": `successfully deleted` });
        res.json(result);
      } catch (error) {
        console.error(error);
    }
};
