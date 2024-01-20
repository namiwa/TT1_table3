const express = require('express');
const router = express.Router();
import {NextFunction, Request, Response} from 'express';
import {getAllDestination, createDestination, updateDestination} from "../controllers/destinationController";

router.get('/getAll', getAllDestination);
router.post('/create', createDestination);
router.put('/update', updateDestination);
//router.delete('/delete/destination', deleteDestination);

module.exports = router;