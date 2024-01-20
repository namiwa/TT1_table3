const express = require('express');
const router = express.Router();
import {NextFunction, Request, Response} from 'express';
import {
    getAllDestination,
    createDestination,
    updateDestination,
    getDestinationViaId,
    deleteDestinationViaId
} from '../controllers/destinationController';

router.get('/getAllDestinations', getAllDestination);
router.get('/getDestinationById', getDestinationViaId);
router.post('/createDestination', createDestination);
router.put('/updateDestination', updateDestination);
router.delete('/delete/destination', deleteDestinationViaId);

module.exports = router;
