const express = require('express');
const router = express.Router();
import {NextFunction, Request, Response} from 'express';
import {getAllDestination, createDestination, updateDestination, deleteDestination} from "../controllers/destinationController";

router.get('/getAll', getAllDestination);
router.post('/create', createDestination);
router.put('/update', updateDestination);
router.delete('/delete', deleteDestination);

module.exports = router;