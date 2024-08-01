import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa'; // Import the star icon from react-icons/fa

const RatingPage = () => {
  const [hostelBlocks, setHostelBlocks] = useState([]);
  const [rating, setRating] = useState(0); // Changed to integer for star rating
  const [userid, setUserid] = useState('cs21btech11063@iith.ac.in');
  const [alreadyRated, setAlreadyRated] = useState(false);
  const [prevRating, setPrevRating] = useState(0.0); // State to hold previous rating

  useEffect(() => {
    // const id = localStorage.getItem('userid');
    // setUserid(id);
    // Fetch hostel block details from the backend
    var id=localStorage.getItem('userid');
    setUserid(id);
    axios.get(`http://localhost:5000/ratingpage/${id}`)
      .then(response => {
        setAlreadyRated(response.data[2]);
        setPrevRating(response.data[1]); // Set previous rating from response
        setHostelBlocks(response.data[0]);
      })
      .catch(error => {
        console.error('Error fetching hostel blocks:', error);
      });
  }, [userid]); // Add userid to the dependency array

  const handleRatingChange = (value) => {
    
    setRating(value);
    handleSubmitRatings(value);
  };

  const handleSubmitRatings = (value) => {
    console.log('handle rating change Rating:', value);
    // Send ratings to the backend
    console.log('Rating:', value);
    console.log('Userid:', userid); // Now userid is accessible here
    const id_rating = { userid, rating: value };
    axios.post('http://localhost:5000/ratingpage', {id_rating,rated_bool:alreadyRated})
      .then(response => {
        console.log('Ratings submitted successfully:', response.data);
        // Optionally, you can reset ratings state here
        window.location.reload();
      })
      .catch(error => {
        // setAlreadyRated(true);
        console.error('Error submitting ratings:', error);
      });
  };

  // Function to render stars based on the rating
  const renderStars = (currentRating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className="star"
          size={50} // Set the size of the stars
          color={i <= currentRating ? '#ffc107' : '#e4e5e9'} // Yellow for rated stars, grey for unrated stars
          onClick={() => handleRatingChange(i)}
        />
      );
    }
    return stars;
  };
  // Function to render stars based on the rating, including fractional parts
const renderDisplayStars = (currentRating) => {
  const stars = [];
  const filledStars = Math.floor(currentRating); // Number of filled stars
  const remainingStars = 5 - filledStars; // Number of empty stars

  // Push filled stars
  for (let i = 1; i <= filledStars; i++) {
    stars.push(
      <FaStar
        key={i}
        className="star"
        color="#ffc107" // Yellow for filled stars
        onClick={() => handleRatingChange(i)}
      />
    );
  }

  // Push star with partial fill
  if (currentRating % 1 !== 0) {
    stars.push(
      <FaStar
        key={filledStars + 1}
        className="star"
        color="#ffc107" // Yellow for filled stars
        style={{ clipPath: `polygon(0 0, ${currentRating % 1 * 100}% 0, ${currentRating % 1 * 100}% 100%, 0 100%)` }} // Clip path for partial fill
        onClick={() => handleRatingChange(filledStars + 1)}
      />
    );
  }

  // Push empty stars
  for (let i = 1; i <= remainingStars; i++) {
    stars.push(
      <FaStar
        key={filledStars + i + 1}
        className="star"
        color="#e4e5e9" // Grey for empty stars
        onClick={() => handleRatingChange(filledStars + i)}
      />
    );
  }

  return stars;
};


// const renderDisplayStars = (currentRating) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     stars.push(
//       <FaStar
//         key={i}
//         className="star"
//         size={12} // Set the size of the stars for displaying rating
//         color={i <= currentRating ? '#ffc107' : '#e4e5e9'} // Yellow for rated stars, grey for unrated stars
//       />
//     );
//   }
//   return stars;
// };

  return (
    <div className="container">
      <h1>Hostel Block Ratings</h1>
      <div className="row">
        {hostelBlocks.map(block => (
          <div key={block.block_name} className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{block.block_name}</h5>
                <img src="https://www.collegebatch.com/static/clg-gallery/indian-institute-of-technology-hyderabad-239587.jpg" alt="Block" className="card-img-top" style={{ maxHeight: '200px', objectFit: 'cover' }} /> {/* Added max height and object fit */}
                <p className="card-text">Rating: {block.rating}</p>
                <div>{renderDisplayStars(block.rating)}</div> {/* Render stars based on current rating */}
              </div>
            </div>
          </div>
        ))}
      </div>

        <hr/>
        {!alreadyRated && (
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <h5>Rate the block</h5>
            {renderStars(rating)} {/* Render stars for rating */}
          </div>
        </div>
      )}

      {alreadyRated && (
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <h5>You have already rated this block</h5>
            {/* <p>Previous Rating: {prevRating}</p> */}
            <div>{renderStars(prevRating)}</div> {/* Render stars for previous rating */}
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingPage;
