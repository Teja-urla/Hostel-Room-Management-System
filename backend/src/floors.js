var express = require('express');
const router = express.Router()
var db = require('./db');


router.post('/', function (req, res) { // this route is for getting floors
    console.log("hostel_blocks_id: [][][][][]")
    console.log(req.body);
    var block_id = "";
    block_id = req.body.block_id + "%";
    db.query('SELECT floor_number FROM floors WHERE floor_number like ?', block_id, function (error, results, fields) {
        console.log(results);
        if (error) throw error;
        res.send(results);
    });
    
});

module.exports = router;