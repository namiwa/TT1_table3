//const Destination = require('../prisma/Destination');

const express = require('express')
const db = require('./db')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const getAllDestination = async (req, res) => {
    //const Destination = await Destination.find();
    const result = await db.pool.query("select * from destination");
    if (!result) return res.status(204).json({ 'message': 'No Destination found.' });
    res.json(result);
}


// (PK) ID
// 3
// (FK) Country_ID
// 4
// Cost
// 170
// Name
// Dusk Restaurant & Bar
// Notes
// No reservation needed!

// const createNewDestination = async (req, res) => {
//     //fk country_id
//     if (!req?.body?.id) {
//         return res.status(400).json({ 'message': 'Destination ID are required' });
//     }

//     let task = req.body;
//     try {
//         const result = await db.pool.query("insert into tasks (description) values (?)", [task.description]);
//         res.send(result);
//     } catch (err) {
//         throw err;
//     }

//     try {
//         const result = await Destination.create({
//             //firstname: req.body.firstname,
//             //lastname: req.body.lastname

//             id: req.body.id,
//             country_id: req.body.country_id,
//             cost: req.body.cost,
//             name: req.body.name,
//             notes: req.body.notes
//         });

//         res.status(201).json(result);
//     } catch (err) {
//         console.error(err);
//     }
// }

// const updateDestination = async (req, res) => {
//     if (!req?.body?.id) {
//         return res.status(400).json({ 'message': 'ID parameter is required.' });
//     }

//     const Destination = await Destination.findOne({ _id: req.body.id }).exec();
//     if (!Destination) {
//         return res.status(204).json({ "message": `No Destination matches ID ${req.body.id}.` });
//     }
//     if (req.body?.firstname) Destination.firstname = req.body.firstname;
//     if (req.body?.lastname) Destination.lastname = req.body.lastname;
//     const result = await Destination.save();
//     res.json(result);
// }

// const deleteDestination = async (req, res) => {
//     if (!req?.body?.id) return res.status(400).json({ 'message': 'Destination ID required.' });

//     const Destination = await Destination.findOne({ _id: req.body.id }).exec();
//     if (!Destination) {
//         return res.status(204).json({ "message": `No Destination matches ID ${req.body.id}.` });
//     }
//     const result = await Destination.deleteOne(); //{ _id: req.body.id }
//     res.json(result);
// }

// const getDestination = async (req, res) => {
//     if (!req?.params?.id) return res.status(400).json({ 'message': 'Destination ID required.' });

//     const Destination = await Destination.findOne({ _id: req.params.id }).exec();
//     if (!Destination) {
//         return res.status(204).json({ "message": `No Destination matches ID ${req.params.id}.` });
//     }
//     res.json(Destination);
// }

module.exports = {
    getAllDestination,
    //createNewDestination,
    // updateDestination,
    // deleteDestination,
    //getDestination
}