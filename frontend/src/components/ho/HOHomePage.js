import React, { useState, useEffect } from 'react';
import axios from './axios';
import HOAnnouncements from './HOAnnouncements';
import HOTickets from './HOTickets';
import HOSearchStudent from './HOSearchStudent';
import AllotHR from './AllotHR';
import HOExchange from './HOExchange';
import HOCheckin from './HOCheckin';
export default function HOHomePage() {
    useEffect(() => {
        // get the user type from local storage
        const userType = localStorage.getItem("user_type");
        // if the user type is not student, redirect to the login page
        if(userType === "student" ) {
            window.location.href = '/student';
        }
        if(userType === "hr") {
            window.location.href = '/hr';
        }
    }, [])
    const [curPage, setCurPage] = useState('HOAnnouncements');
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="list-group">
                        <button onClick={() => setCurPage('HOAnnouncements')} className="list-group-item list-group-item-action">Announcements</button>
                        <button onClick={() => setCurPage('HOSearchStudent')} className="list-group-item list-group-item-action">Search Student</button>
                        <button onClick={() => setCurPage('HOTickets')} className="list-group-item list-group-item-action">Tickets</button>
                        <button onClick={() => setCurPage('AllotHR')} className="list-group-item list-group-item-action">AllotHR</button>
                        <button onClick={() => setCurPage('HOExchange')} className="list-group-item list-group-item-action">Exchange</button>
                        <button onClick={() => setCurPage('HOCheckin')} className="list-group-item list-group-item-action">Checkin</button>
                    </div>
                </div>
                <div className="col-md-9">
                    {curPage === 'HOAnnouncements' && <HOAnnouncements />}
                    {curPage === 'AllotHR' && <AllotHR />}
                    {curPage === 'HOSearchStudent' && <HOSearchStudent />}
                    {curPage === 'HOTickets' && <HOTickets />}
                    {curPage === 'HOExchange' && <HOExchange />}
                    {curPage === 'HOCheckin' && <HOCheckin />}
                </div>
            </div>
        </div>
        </>
    )
}