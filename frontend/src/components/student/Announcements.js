import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Announcements = ({ id }) => {
  const [announcements, setAnnouncements] = useState([]);

  // Function to calculate time elapsed since creation
  const calculateTimeElapsed = (createdAt, duration) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const elapsedTime = currentDate - createdDate;
    const remainingTime = duration * 24 * 60 * 60 * 1000 - elapsedTime;
    const fraction = elapsedTime / (duration * 24 * 60 * 60 * 1000);
    console.log(createdDate);
    console.log(currentDate);
    console.log(elapsedTime);
    console.log(fraction);
    return { elapsedTime, remainingTime, fraction };
  };

  useEffect(() => {
    var id=localStorage.getItem("userId");
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/announcements/${id}`);
        setAnnouncements(response.data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className='container'>
      <h1 className="mb-4 my-4">Announcements</h1>
      {announcements.map((announcement, index) => {
        const { elapsedTime, remainingTime, fraction } = calculateTimeElapsed(announcement.created_at, announcement.duration);

        let badgeColor = 'primary';
        if (fraction <= 1 / 5) {
          badgeColor = 'success'; // New
        } else if (fraction >= 4 / 5) {
          badgeColor = 'danger'; // Alert
        }

        return (
          <div key={index} className={`alert alert-${badgeColor}`} role="alert">
            <div className="d-flex align-items-center">
              {announcement.id.startsWith('hr.') && (
                <span className="badge bg-secondary me-2">From HR</span>
              )}
              {announcement.id.startsWith('office.') && (
                <span className="badge bg-dark me-2">From HO</span>
              )}
              <h5 className="alert-heading">{announcement.title}</h5>
              {fraction <= 1 / 5 && (
                <span className="badge bg-success ms-auto">New</span>
              )}
              {fraction >= 4 / 5 && (
                <span className="badge bg-danger ms-auto">Ending Soon</span>
              )}
            </div>
            <p>{announcement.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Announcements;
