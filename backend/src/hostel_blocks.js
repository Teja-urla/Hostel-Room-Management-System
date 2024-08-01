var express = require('express');
const router = express.Router()
var db = require('./db');

// get all hostel_blocks
router.get('/', function (req, res) { // already route defined in Backend/index.js
    console.log("hostel_blocks")
    db.query('SELECT * FROM hostel_blocks', function (error, results, fields) {
        console.log(results);
        if (error) throw error;
        res.send(results);
    });
});

module.exports = router;