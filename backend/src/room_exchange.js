const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('./db.js');

/*
CREATE TABLE IF NOT EXISTS room_exchange (
    id INT NOT NULL,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    room_exchange_description VARCHAR(255),
    room_number_from INT NOT NULL,
    room_number_to INT NOT NULL,
    primary key(id, created_time)
);
*/
router.post('/', (req, res) => {
    let id = req.body.id;
    let room_exchange_description = req.body.room_exchange_description;
    let room_number_from = req.body.room_number_from;
    let room_number_to = req.body.room_number_to;
    let query = `INSERT INTO room_exchange (id, room_exchange_description, room_number_from, room_number_to) VALUES (${id}, '${room_exchange_description}', ${room_number_from}, ${room_number_to})`;
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error in saving room exchange details");
        } else {
            res.status(200).send("Room exchange details saved successfully");
        }
    });
});


module.exports = router;