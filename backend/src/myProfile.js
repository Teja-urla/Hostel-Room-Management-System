const express = require('express');
const router = express.Router();
const db = require('./db.js');

// Handle GET request to fetch user and room details
router.get('/:id', (req, res) => {
    const userId = req.params.id;
  
    // Query to get user details from users table
    const userQuery = 'SELECT * FROM users WHERE id = ?';
  
    // Query to get room details using room number from users table
    const roomQuery = 'SELECT * FROM rooms WHERE room_no = ?';
  
    // Perform two sequential MySQL queries
    db.query(userQuery, [userId], (err, userResults) => {
      if (err) {
        console.error('Error fetching user details:', err);
        res.status(500).send('Error fetching user details');
        return;
      }
  
      if (userResults.length === 0) {
        res.status(404).send('User not found');
        return;
      }
  
      const roomNumber = userResults[0].room_number;
  
      // Fetch room details using room number
      db.query(roomQuery, [roomNumber], (err, roomResults) => {
        if (err) {
          console.error('Error fetching room details:', err);
          res.status(500).send('Error fetching room details');
          return;
        }
  
        if (roomResults.length === 0) {
          res.status(404).send('Room details not found');
          return;
        }
  
        // Combine user and room details
        const userDetails = {
          user: userResults[0],
          room: roomResults[0]
        };
  
        res.send(userDetails);
      });
    });
  });

// Handle PUT request to update user details
router.put('/:id', (req, res) => {
    const userId = req.params.id;
    // console.log("**********",userId);
    const { username, password, phoneNumber } = req.body;
    console.log(req.body);
    // Query to update user details in the database
    const updateUserQuery = 'UPDATE users SET username = ?, password = ?, phone_number = ? WHERE id = ?';

    db.query(updateUserQuery, [username, password, phoneNumber, userId], (err, result) => {
        if (err) {
            console.error('Error updating user details:', err);
            res.status(500).send('Error updating user details');
            return;
        }
        console.log(result);
        res.send('User details updated successfully');
    });
});

module.exports = router;
