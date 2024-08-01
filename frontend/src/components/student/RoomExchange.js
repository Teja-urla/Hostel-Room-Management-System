import React, { useState, useEffect } from 'react';
import axios from './axios';

export default function RoomExchange() {
    const [id, setId] = useState('cs21btech11002@iith.ac.in'); // Assuming id is stored in state
    const [roomNumber, setRoomNumber] = useState(null); // Assuming roomNumber is stored in state
    const [exchangeform, setExchangeForm] = useState({
        room_exchange_description: '',
        room_number_from: 'A101',
        room_number_to: '',
        id: 'cs21btech11062@iith.ac.in'
    });
    // above id, room_number_from is hardcoded, it should be fetched from memory
    const handleSubmit =  () => {
        axios.post('/room_exchange', exchangeform)
            .then((res) => {
                // check status code=200
                if (res.status === 200) {
                    alert("Room Exchange Request Submitted Successfully");
                }                
                else {
                    alert("Error in submitting Room Exchange Request");
                }
            })
            .catch((err) => {
                console.log(err);
                alert("Error in submitting Room Exchange Request");
            });
    }
    return (
        <>
            form for room exchange <br/>
            <input type="text" placeholder="Room Exchange Description" onChange={(e) => setExchangeForm({ ...exchangeform, room_exchange_description: e.target.value })} />
            {/* <input type="text" placeholder="Room Number From" onChange={(e) => setExchangeForm({ ...exchangeform, room_number_from: e.target.value })} /> */}
            <br/>
            <input type="text" placeholder="Room Number To" onChange={(e) => setExchangeForm({ ...exchangeform, room_number_to: e.target.value })} />

            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
