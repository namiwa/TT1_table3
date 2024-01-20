const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

router.get('/', destinationController.getAllDestination);
// router.post('/', destinationController.getAllDestination);
// router.put('/', destinationController.updateDestination);
// router.delete('/', destinationController.deleteDestination);

module.exports = router;