const express = require('express');
const router = express.Router();
const db = require('./db.js');

const getPodMates = (roomNumber) => {
    // Define the pod ranges and their corresponding pods
    const pods = [
        { range: [1, 8] },
        { range: [9, 16] },
        { range: [17, 24] },
        { range: [25, 32] }
    ];

    let podMates = [];

    // Determine the floor based on the room number
    const floor = roomNumber.slice(0, 2);
    console.log("floor :",floor)
    // Convert room number to integer for comparison
    const roomNumberInt = parseInt(roomNumber.slice(2));
    console.log("Room :",roomNumberInt)
    // Determine the pod based on the room number
    for (const pod of pods) {
        if (roomNumberInt >= pod.range[0] && roomNumberInt <= pod.range[1]) {
            // Generate pod mates' room numbers
            for (let i = pod.range[0]; i <= pod.range[1]; i++) {
                const paddedRoomNumber = i < 10 ? `0${i}` : i; // Pad single-digit room numbers with leading zero
                podMates.push(`${floor}${paddedRoomNumber}`);
            }
            break; // Exit loop once the pod is found
        }
    }

    return podMates;
};


// Handle GET request to fetch user and floor details
router.get('/:id', (req, res) => {
    const userId = req.params.id;

    // Query to get user room number from users table
    const userQuery = 'SELECT room_number FROM users WHERE id = ?';

    // Query to get floor details using floor number from users table
    const floorQuery = 'SELECT * FROM floors WHERE floor_number = ?';

    // Perform the user query
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
        const floorNumber = roomNumber.slice(0, 2); // Extract floor number from room number

        // Fetch floor details using floor number
        db.query(floorQuery, [floorNumber], (err, floorResults) => {
            if (err) {
                console.error('Error fetching floor details:', err);
                res.status(500).send('Error fetching floor details');
                return;
            }

            if (floorResults.length === 0) {
                res.status(404).send('Floor details not found');
                return;
            }

            // Get pod mates' room numbers
            const podMates = getPodMates(roomNumber);
            console.log('lshgiusdhiu', podMates);

            // Query to get details of pod mates
            const podMatesQuery = 'SELECT * FROM users WHERE room_number IN (?) AND NOT id LIKE "hr.%"';

            // Perform the pod mates query
            db.query(podMatesQuery, [podMates], (err, podMatesResults) => {
                if (err) {
                    console.error('Error fetching pod mates details:', err);
                    res.status(500).send('Error fetching pod mates details');
                    return;
                }

                res.send({floorData: floorResults[0], podMates: podMatesResults });
            });
        });
    });
});

module.exports = router;
