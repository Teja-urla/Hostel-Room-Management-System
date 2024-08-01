const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('./db.js');

// Function to convert room number to block name
function convertRoomNumberToBlockName(roomNumber) {
    const blockNames = {
      A: 'Aryabhatta',
      B: 'Bhaskara',
      C: 'Charaka',
      D: 'Susruta',
      E: 'Kautilya',
      F: 'Vyasa',
      G: 'Brahmagupta',
      H: 'Varahamihira'
    };
  
    const block = roomNumber.charAt(0).toUpperCase();
    return blockNames[block] || 'Unknown';
  }

// Function to construct ID from block name
function constructIDFromBlockName(blockName) {
    const lowerCaseBlockName = blockName.toLowerCase();
    return `hr.${lowerCaseBlockName}@iith.ac.in`;
  }

router.get('/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    // Search for the user's room number
    db.query('SELECT room_number FROM users WHERE id = ?', [id], (err, results) => {
        if (err) throw err;

        // Check if user exists
        if (results.length === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            const roomNumber = results[0].room_number;
            const blockName = convertRoomNumberToBlockName(roomNumber);
            // Construct ID from block name
            const userId = constructIDFromBlockName(blockName);

            // Search for announcements for the given block or for office announcements
            db.query('SELECT * FROM announcements WHERE id = ? OR id = ? ORDER BY created_at DESC', [userId, 'office.hostel@iith.ac.in'], (err, results) => {
                if (err) throw err;

                res.json(results);
            });
        }
    });
});


module.exports = router;