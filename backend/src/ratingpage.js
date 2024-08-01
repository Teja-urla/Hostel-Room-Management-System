const express = require('express');
const router = express.Router();
const db = require('./db');



var block_id;
router.get('/:id', (req, res) => {
    const userid = req.params.id; // Ensure to declare variables with `const` or `let`
    console.log("userid: " + userid);   
    db.query('SELECT room_number FROM users WHERE id=?', [userid], (error, results, fields) => {
        if (error) {
            res.status(500).send('An error occurred while fetching room number');
            console.log("error in fetching room number " + error);
        }
        else {
            
            const room_number = results[0].room_number;
            block_id = room_number.substring(0, 1);
            console.log("block_id: " + block_id);
        }
    });


    db.query('SELECT block_name, rating FROM hostel_blocks', (error, results1, fields) => {
        if (error) {
            console.log(error);
            res.status(500).send('An error occurred while fetching hostel blocks');
        } else {
            db.query('SELECT rating FROM ratings WHERE id=? and block_id=?', [userid,block_id], (error, results2, fields) => {
                if (error) {
                    res.status(500).send('An error occurred while fetching ratings');
                    console.log("error in fetching ratings " + error);
                } else {
                    if (results2.length > 0) {
                        console.log("results2: " + results2[0].rating);
                        results=[results1, results2[0].rating,true];
                        res.status(200).send(results);
                        
                    } else {
                        console.log("results2: " + results2);
                        results=[results1, results2,false];
                        res.status(200).send(results);
                    }

                }
            });        
                
        }
    });
});

router.post('/', (req, res) => {
    // const id_rating = { userid, rating: value };
    // axios.post('http://localhost:5000/ratingpage', {id_rating,rated_bool:alreadyRated})

    const userid = req.body.id_rating.userid;
    const rating = req.body.id_rating.rating;
    const alreadyRated = req.body.rated_bool;
    // INSERT INTO ratings (id, block_id, rating) VALUES (?, ?, ?)
    if(alreadyRated){
        var query = 'UPDATE ratings SET rating=? WHERE id=? AND block_id=?';
        var values = [rating, userid, block_id];
    }
    else{
        var query = 'INSERT INTO ratings (id, block_id, rating) VALUES (?, ?, ?)';
        var values = [userid, block_id, rating];
    }

    db.query(query, values, (error, results, fields) => {
        if (error) {
            res.status(500).send('An error occurred while submitting ratings');
            console.log("error submitting rating " + error);
        } else {
            db.query('SELECT AVG(rating) AS avg_rating FROM ratings WHERE block_id=?', [block_id], (error, results, fields) => {
                if (error) {
                    res.status(500).send('An error occurred while fetching average ratings');
                    console.log("error fetching avg rating " + error);
                } else {
                    const avg_rating = results[0].avg_rating;
                    db.query('UPDATE hostel_blocks SET rating=? WHERE block_id=?', [avg_rating, block_id], (error, results, fields) => {
                        if (error) {
                            res.status(500).send('An error occurred while updating hostel block ratings');
                            console.log("error updating rating " + error);
                        } else {
                            res.status(200).send('Ratings submitted successfully');
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;
