const express = require('express');
const router = express.Router();
import {NextFunction, Request, Response} from 'express';
<<<<<<< HEAD
import {getAllDestination, createDestination, updateDestination, deleteDestination} from "../controllers/destinationController";

router.get('/getAll', getAllDestination);
router.post('/create', createDestination);
router.put('/update', updateDestination);
router.delete('/delete', deleteDestination);
=======
import {getAllDestination, createDestination, updateDestination, getDestinationViaId, deleteDestinationViaId} from "../controllers/destinationController";

router.get('/getAllDestinations', getAllDestination);
router.get('/getDestinationById', getDestinationViaId);
router.post('/createDestination', createDestination);
router.put('/updateDestination', updateDestination);
router.delete('/delete/destination', deleteDestinationViaId);
>>>>>>> 9ef852dc56db826e9f81261cc674f81c45f0ba42

module.exports = router;
