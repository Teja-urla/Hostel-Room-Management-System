import React, { useState, useEffect } from 'react';
import axios from './axios';
import MyProfile from './MyProfile';
import MyPod from './MyPod';
import Announcements from './Announcements';
import RoomMgmt from './RoomMgmt';
import Tickets from './Tickets';
export default function StudentHomePage() {
    useEffect(() => {
        // get the user type from local storage
        const userType = localStorage.getItem("user_type");
        // if the user type is not student, redirect to the login page
        if(userType === "hr" ) {
            window.location.href = '/hr';
        }
        if(userType === "ho") {
            window.location.href = '/ho';
        }
    }, [])
    const [CurPage, setCurPage] = useState("MyProfile")
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
                        <button onClick={() => setCurPage("MyProfile")} className="list-group-item list-group-item-action">My Profile</button>
                        <button onClick={() => setCurPage("MyPod")} className="list-group-item list-group-item-action">My Pod</button>
                        <button onClick={() => setCurPage("Announcements")} className="list-group-item list-group-item-action">Announcements</button>
                        <button onClick={() => setCurPage("RoomMgmt")} className="list-group-item list-group-item-action">Room Management</button>
                        <button onClick={() => setCurPage("Tickets")} className="list-group-item list-group-item-action">Complaints</button>
                    </div>
                </div>
                <div className="col-md-9">
                    {CurPage === "MyProfile" && <MyProfile />}
                    {CurPage === "MyPod" && <MyPod />}
                    {CurPage === "Announcements" && <Announcements />}
                    {CurPage === "RoomMgmt" && <RoomMgmt />}
                    {CurPage === "Complaints" && <Tickets/>}
                </div>
            </div>
        </div>
        
        <button onClick={() => {handleLogout()}} type="button" class="btn btn-outline-primary">Log out</button>
        </>
    )
}
