import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log('Form data:', formData);
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log(response.data);
      // Store ID in local storage if login is successful
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('user_type', response.data.userType);
      localStorage.setItem('hostel_block', response.data.firstLetter);
      if (response.data.userType === 'student') {
        window.location.href = '/student';
      }
      if (response.data.userType === 'hr') {
        window.location.href = '/hr';
      }
      if (response.data.userType === 'ho') {
        window.location.href = '/ho';
      }
      // You can redirect the user to another page here if needed
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Invalid credentials. Please try again.');
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="id">ID:</label>
              <input type="text" className="form-control" id="id" name="id" value={formData.id} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <button className="btn btn-primary">Login</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </form>
          {/* two buttons  for redorect into forgot password and signup pages */}
          <br/>
        </div>
      </div>
    </div>
  );
}

export default Login;
