import React, { useState } from 'react';

export default function Checkinout() {
    const [uploading, setUploading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Perform any client-side validation here
        
        // Set uploading state to true to indicate that the file is being uploaded
        setUploading(true);

        try {
            // Use fetch or any other method to send the form data to the server
            const response = await fetch('http://localhost:5000/checkinout', {
                method: 'POST',
                body: new FormData(event.target),
            });

            if (!response.ok) {
                throw new Error('Failed to upload file');
            }

            // Handle successful response, such as showing a success message
            console.log('File uploaded successfully');
            alert('File uploaded successfully');
            window.location.reload(); // Reload the page to clear the form

        } catch (error) {
            // Handle errors, such as displaying an error message to the user
            console.error('Error uploading file:', error.message);

        } finally {
            // Reset uploading state after upload is complete
            setUploading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input type="hidden" id="id" name="id" value='cs21btech11063@iith.ac.in' />
            <label htmlFor="pdf">Select PDF file to upload:</label>
            <input type="file" id="pdf" name="pdf" accept=".pdf" required />
            <br />
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
            <br />
            <label htmlFor="startTime">Start Time:</label>
            <input type="datetime-local" id="startTime" name="startTime" required />
            <br />
            <label htmlFor="endTime">End Time:</label>
            <input type="datetime-local" id="endTime" name="endTime" required />
            <br />
            <label htmlFor="reason">Reason:</label>
            <input type="text" id="reason" name="reason" required />
            <br />
            <button type="submit" disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload'}
            </button>
        </form>
    );
};

