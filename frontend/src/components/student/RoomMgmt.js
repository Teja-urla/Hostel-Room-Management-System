import React, { useState, useEffect } from 'react';
import axios from './axios';
import RoomExchange from './RoomExchange';
import RoomAllot from './RoomAllot';
import Rating from './Rating';
import Checkinout from './Checkinout';
export default function RoomMgmt() {
  // use states for the form inputs
  const [subTab, setSubTab] = useState("RoomAllot")
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="list-group">
                            <button onClick={() => setSubTab("RoomAllot")} className="list-group-item list-group-item-action">Room Allotment</button>
                            <button onClick={() => setSubTab("RoomExchange")} className="list-group-item list-group-item-action">Room Exchange</button>
                            <button onClick={() => setSubTab("Rating")} className="list-group-item list-group-item-action">Rating</button>
                            <button onClick={() => setSubTab("Checkinout")} className="list-group-item list-group-item-action">Check In/Out</button>
                        </div>
                    </div>
                    <div className="col-md-9">
                        {subTab === "RoomAllot" && <RoomAllot />}
                        {subTab === "RoomExchange" && <RoomExchange />}
                        {subTab === "Rating" && <Rating />}
                        {subTab === "Checkinout" && <Checkinout />}
                    </div>
                </div>
            </div>           

        </div>
    );
}

