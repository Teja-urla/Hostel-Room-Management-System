import React from 'react';
import { useEffect, useState } from "react";

import axios from './axios';

function ForgotPassword() {
{/* Forgot password for getting the password from the database */}
const [id_forgot, setId_forgot] = useState(
    {
      forgot_id: '',
        email_id: ''
    }
  );
  
  const handleChange1 = (e) => {
    setId_forgot({ ...id_forgot, [e.target.name]: e.target.value });
  }
  
  const handleSubmit1 = (e) => {
    console.log("][][]][[]")
    console.log(id_forgot);
    axios.post('/login/forgot_password', id_forgot)
        .then((res) => {
            console.log("forgot_password: ", res.data);
        })
        .catch((error) => console.log("Error:", error));
  }

    return (
<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8"> 
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title" style={{fontSize: '24px'}}>Forgot Password</h4> 
                    <form>
                       
                        <br/>
                        <div class="form-group" style={{marginBottom: '10px'}}> 
                            <label for="email_id" style={{fontSize: '18px'}}>Enter your email_id (password will be sent to this mail-id):</label>
                            <input type="text" class="form-control" id="email_id" name="email_id" value={id_forgot.email_id} placeholder="Enter your email ID" onChange={handleChange1} />
                        </div>
                        <button type="button" class="btn btn-outline-success btn-lg" onClick={(e) => handleSubmit1(e)}>Send Code</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>



    );
}

export default ForgotPassword;