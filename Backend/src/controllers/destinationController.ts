import { PrismaClient } from '@prisma/client';
import {NextFunction, Request, Response} from "express";
import {deleteDestinationById, getDestinationById } from '../repository/destinationRepository';

const prisma = new PrismaClient();

//READ OPERATIONS
export const getAllDestination = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.destination.findMany({});
        res.send(result);
        res.status(200).json({ success: true, data: result });
      } catch (e) {
        next(e)
      }
};

export const getDestinationViaId = async (req: Request, res: Response, next: NextFunction)=> {
    try {
        const destinationId: number = req.body
        const destination = getDestinationById(destinationId)
        res.status(200).json({destination})
    }
    catch (e) {
        next(e)
    }
}

export const createDestination = async (req: Request, res: Response, next: NextFunction) => {
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

<<<<<<< HEAD
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
=======
export const updateDestination = async (req: Request, res: Response, next: NextFunction)  => {
    try {
        const result = prisma.destination.update({
        where: {
            destinationId: req.body.destinationId
        },
        data: {
            destinationId: req.body.destinationId,
            destinationCountryId: req.body.destinationCountryId,
            cost: req.body.cost,
            name: req.body.name,
            notes: req.body.notes
        }})
        res.status(200).json({result})
    }catch (e) {
        next(e)
    }

}

export const deleteDestinationViaId = (req: Request, res: Response, next: NextFunction) => {
    try {
        const destinationId: number = req.body.destinationId
        const result = deleteDestinationById(destinationId)
        res.status(200)
    }
    catch (e) {
        next(e)
    }

>>>>>>> 9ef852dc56db826e9f81261cc674f81c45f0ba42
};
