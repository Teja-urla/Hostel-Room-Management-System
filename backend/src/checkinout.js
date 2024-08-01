const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('./db.js');

/*
Schema:
CREATE TABLE IF NOT EXISTS check_in (
    id VARCHAR(255) NOT NULL,
    start_time TIMESTAMP ,
    end_time TIMESTAMP,
    reason VARCHAR(255),
    file_upload VARCHAR(255),
    title VARCHAR(255),
    primary key(id, start_time)
);
*/

// Assuming you have some middleware for handling file uploads, you can use multer for example
const multer = require('multer');

// Set up storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save uploaded files to the 'uploads' folder
  },
  filename: function (req, file, cb) {
    // Generate a unique filename by appending current timestamp to the original filename
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create multer instance
const upload = multer({ storage: storage });

// POST route for uploading PDF file and storing file path in database
router.post('/', upload.single('pdf'), (req, res) => {
  // Assuming the file input field name is 'pdf'
  console.log("File uploaded")
  // Get file path
  console.log(req.file.path)
  const filePath = req.file.path;

  // Extract other form data if needed
  const { startTime, endTime, reason, title } = req.body;

  const id = req.body.id;
  console.log(id);
  // Insert data into database
  db.query(`INSERT INTO check_in (id, start_time, end_time, reason, file_upload, title) VALUES ('${id}', '${startTime}', '${endTime}', '${reason}', '${filePath}', '${title}')`, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error inserting data into database');
    } else {
      res.status(200).send('Data inserted successfully');
    }
  });
});

module.exports = router;
