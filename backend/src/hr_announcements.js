const express = require('express');
const router = express.Router();
const db = require('./db'); 

// this is my schema
//create table announcements (
//    id VARCHAR(255) not null,
//    -- who posted the announcement
//    title varchar(255) not null,
//    content varchar(255) not null,
//    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//    -- duration of announcement
//    duration INT not null,
//    -- foreign key (user_id) references users(id)
//    PRIMARY KEY (id, created_at)
//);

//now given an user_id of the user, get all announcements that are posted by the user and also announcements that are posted by the Hostel office who have an ID=ho@gmail.com

router.get('/:user_id', (req, res) => {
    // console.log('Announcements route');
    // console.log(req.params.user_id);
    db.query('SELECT * FROM announcements WHERE id = ? OR id = "office.hostel@iith.ac.in"', [req.params.user_id], (error, results, fields) => {
        if (error) {
            // console.log(error);
            res.status(500).send('An error occurred while fetching announcements');
        } else {
            // console.log(results);
            res.status(200).send(results);
        }
    }
    );
}
);

// update the announcement with the given id
router.put('/:id', (req, res) => {
    console.log('Update announcement route');
    // console.log(req.params.id);
    // console.log(req.body);
    //query is UPDATE announcements SET title = ?, content = ?, duration = ? WHERE id = ? and created_at = ?
    console.log(req.body)
    const moment = require('moment');
    const formattedDate = moment(req.body.created_at).format('YYYY-MM-DD HH:mm:ss');

    db.query('UPDATE announcements SET title = ?, content = ?, duration = ? WHERE id = ? and created_at = ?', [req.body.title, req.body.content, req.body.duration, req.body.id, formattedDate], (error, results, fields) => {
        if (error) {
            console.log(error);
            res.status(500).send('An error occurred while updating the announcement');
        } else {
            // console.log(results);
            res.status(200).send('Announcement updated successfully');
        }
    }
    );
}
);

router.post('/', (req, res) => {
    console.log('Create announcement route');
    console.log(req.body);
    //query is INSERT INTO announcements (id, title, content, duration) VALUES (?, ?, ?, ?)
    db.query('INSERT INTO announcements (id, title, content, duration) VALUES (?, ?, ?, ?)', [req.body.id, req.body.title, req.body.content, req.body.duration], (error, results, fields) => {
        if (error) {
            console.log(error);
            res.status(500).send('An error occurred while creating the announcement');
        } else {
            // console.log(results);
            res.status(200).send('Announcement created successfully');
        }
    }
    );
}
);

module.exports = router;