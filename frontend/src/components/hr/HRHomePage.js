import React, { useState, useEffect } from 'react';
import axios from './axios';
import HRAnnouncements from './HRAnnouncements';
import FilterTickets from './FilterTickets';
import SearchStudent from './SearchStudent';
export default function HRHomePage() {
    useEffect(() => {
        // get the user type from local storage
        const userType = localStorage.getItem("user_type");
        // if the user type is not student, redirect to the login page
        if(userType === "student" ) {
            window.location.href = '/student';
        }
        if(userType === "ho") {
            window.location.href = '/ho';
        }
    }, [])
    const [curPage, setCurPage] = useState('HRAnnouncements');
    const handleLogout = () => {
        localStorage.removeItem("user_type");
        localStorage.removeItem("userId");
        localStorage.removeItem("hostel_block");
        window.location.href = "/";
    }
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="list-group">
                        <button onClick={() => setCurPage('HRAnnouncements')} className="list-group-item list-group-item-action">Announcements</button>
                        <button onClick={() => setCurPage('FilterTickets')} className="list-group-item list-group-item-action">Filter Tickets</button>
                        <button onClick={() => setCurPage('SearchStudent')} className="list-group-item list-group-item-action">Search Student</button>
                    </div>
                </div>
                <div className="col-md-9">
                    {curPage === 'HRAnnouncements' && <HRAnnouncements />}
                    {curPage === 'FilterTickets' && <FilterTickets />}
                    {curPage === 'SearchStudent' && <SearchStudent />}
                </div>
            </div>
        </div>
        <button onClick={() => {handleLogout()}} type="button" class="btn btn-outline-primary">Log out</button>

        </>
    )
}
