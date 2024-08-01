var express = require('express');
const router = express.Router()
var db = require('./db');

// get all tickets from tickets table
router.get('/', function (req, res) {
    console.log("tickets")
    db.query('SELECT * FROM tickets where ticket_status = ?',[false] ,function (error, results, fields) {
        console.log(results);
        if (error) throw error;
        res.send(results);
        
    });
});

router.put('/:id', function (req, res) {
    console.log(req.body)
    const id = req.params.id;
    const strID = id.toString();
    
    const filtered = req.body.filtered;
    if(filtered === "true") {
        console.log(filtered)
        db.query('UPDATE tickets SET filtered = ? WHERE id = ?', [true, strID], function (error, results, fields) {
            if (error) throw error;
            res.send(results);
        });
    }

    else {
         const reply = req.body.reply;
         const replyStr = reply.toString();

         const tag = req.body.tag;
        //  tag = tag.toString();

         console.log(reply);
         console.log(id);
         console.log(tag);

        // if the tage are of these: lift,washing machine,water filter,bathroom then update the floor database
        if(tag == "lift" || tag == "washing_machine" || tag == "water_filter" || tag == "bathroom" || tag == "house_keeping") {
        const variable = tag + "_working_status";
        db.query('UPDATE floors SET ' + variable + ' = ? WHERE floor_number = (SELECT SUBSTRING(room_number, 1, 2) FROM users WHERE id = ?)', [true, id], function (error, results, fields) {
                if (error) throw error;
            });
        }

        // lan_status, electrical, furniture
        else if(tag == "lan_status" || tag == "furniture" || tag == "electrical") {
            db.query('UPDATE rooms SET ' + tag + ' = ? WHERE room_no = (SELECT room_number FROM users WHERE id = ?)', [true, id], function (error, results, fields) {
                if (error) throw error;
            }
            );
        }
        
         db.query('UPDATE tickets SET reply = ?, ticket_status = ? WHERE id = ? and tag = ?', [replyStr, true, strID, tag], function (error, results, fields) {
             if (error) throw error;
             res.send(results);
         });
   }

    
});

module.exports = router;