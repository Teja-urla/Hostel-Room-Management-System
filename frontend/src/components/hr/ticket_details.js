import React from 'react';
import { useEffect, useState } from "react";

import axios from './axios';

function TicketDetails() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {  // set the local storage details in the usestate setTickets
       const retrieved_data = localStorage.getItem("selectedTicket");
        const ticket = JSON.parse(retrieved_data);
        setTickets(ticket);
        console.log(ticket);
    }, []);
    
const handleSolveClick = () => { // if the user clicks on the Solve button
    // check if the ticket's reply is N/A or not
    if(tickets.reply === "N/A") {
        const reply_typed = prompt("Please enter your reply");
        if(reply_typed === "") {
            alert("Please enter a reply");
        }
        else{
            // send the reply_typed to the backend
            axios.put(`http://localhost:5000/tickets_hr/${tickets.id}`, {
                reply: reply_typed,
                tag: tickets.tag
            
        }).then((response) => {
            console.log(response);
            });
            alert("Problem solved successfully");
        }
    }
}

const handleFilterClick = () => { // if the user clicks on the Filter button
    // send the ticket details to the backend
    axios.put(`http://localhost:5000/tickets_hr/${tickets.id}`, {filtered: "true"}).then((response) => {
        console.log(response);
    });
}

    return (
        <div>
            DISPLAY TICKET DETAILS:
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">title: {tickets.title}</h5>
                            <p className="card-text">id: {tickets.id}</p>
                    <p className="card-text">raised_time: {tickets.raised_time}</p>
                    <p className="card-text">tag: {tickets.tag}</p>

                <p className="card-text">ticket_status: {tickets.ticket_status}</p>
                        <p className="card-text">filtered: {tickets.filtered}</p>
    <p className="card-text">ticket_description: {tickets.ticket_description}</p>
                    <p className="card-text">file_upload: {tickets.file_upload}</p>
                        <p className="card-text">reply: {tickets.reply}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* put an onclick function for the Solve buttion */}
            <button type="button" class="btn btn-success" onClick={handleSolveClick}>Solve</button>

            <button type="button" class="btn btn-danger" onClick={handleFilterClick}>Filter</button>
        </div>
    );
}

export default TicketDetails;