import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyProfile = ({ id }) => {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    phoneNumber: ''
  });

  useEffect(() => {
    var id=localStorage.getItem("userId");
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/myProfile/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = () => {
    setEditMode(!editMode);
    // Set initial form data when entering edit mode
    if (!editMode && userData) {
      setFormData({
        username: userData.user.username,
        password: userData.user.password,
        phoneNumber: userData.user.phone_number
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var id=localStorage.getItem("userId");
    // Send updated user data to the server
    try {
      const response = await axios.put(`http://localhost:5000/myProfile/${id}`, formData);
      window.location.reload(); // Refresh page after update
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  const maskPassword = (password) => {
    return '*'.repeat(password.length);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container w-50'>
      <h2 className='my-3'>My Profile</h2>
      <div className="card mb-3">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="text-center w-100">
            <strong>PERSONAL DETAILS</strong>
          </div>
          <button onClick={handleEditClick} className={`btn ${editMode ? 'btn-danger' : 'btn-primary'} btn-sm`}>
            {editMode ? 'Cancel' : 'Edit'}
          </button>
        </div>
        <div className="card-body d-flex justify-content-between align-items-center w-100">
          {editMode ? (
            <form onSubmit={handleSubmit} className="w-75 mx-auto">
            <div className='form-group d-flex mb-2'>
              <div className="input-group">
                <span className="input-group-text">Username</span>
                <input
                  type='text'
                  id='username'
                  name='username'
                  value={formData.username}
                  onChange={handleInputChange}
                  className='form-control'
                />
              </div>
            </div>
            <div className='form-group d-flex mb-2'>
              <div className="input-group">
                <span className="input-group-text">Password</span>
                <input
                  type='text'
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  className='form-control'
                />
              </div>
            </div>
            <div className='form-group d-flex mb-2'>
              <div className="input-group">
                <span className="input-group-text">Phone Number</span>
                <input
                  type='text'
                  id='phoneNumber'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className='form-control'
                />
              </div>
            </div>
            <button type='submit' className='btn btn-success btn-sm my-3'>Save Changes</button>
          </form>
       
          ) : (
            <div className="row w-100">
              <div className="col-md-6">
                <p><strong>Username:</strong> {userData.user.username}</p>
                <p><strong>Phone Number:</strong> {userData.user.phone_number}</p>
              </div>
              <div className="col-md-6">
                <p><strong>ID:</strong> {userData.user.id}</p>
                <p><strong>Password:</strong> {maskPassword(userData.user.password)}</p>
              </div>
          </div>
          )}
        </div>
      </div>
      <div className="card">
        <div className="card-header text-center"><strong>ROOM DETAILS</strong></div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>Room Number:</strong> {userData.room.room_no}</p>
              <p><strong>Electrical stuff:</strong> {userData.room.electrical ? 'Working' : 'Not Working'}</p>
              <p><strong>Occupied:</strong> {userData.room.occupied ? 'Yes' : 'No'}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Lan Status:</strong> {userData.room.lan_status ? 'Connected' : 'Disconnected'}</p>
              <p><strong>Furniture:</strong> {userData.room.furniture ? 'Available' : 'Not Available'}</p>
              <p><strong>On Leave:</strong> {userData.room.leave_room ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MyProfile;
