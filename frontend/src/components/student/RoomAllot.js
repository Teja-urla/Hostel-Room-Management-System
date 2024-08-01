import React, { useEffect, useState } from 'react';
import axios from './axios';

export default function RoomAllot() {
    const [roomsdata, setRoomsData] = useState([]);
    const [selectedBlock, setSelectedBlock] = useState("");
    const [selectedFloor, setSelectedFloor] = useState("");
    const [id, setId] = useState('cs21btech11002@iith.ac.in'); // Assuming id is stored in state
    const [roomNumber, setRoomNumber] = useState(null); // Assuming roomNumber is stored in state

    useEffect(() => {
        axios.get('/room_allot').then(response => {
            setRoomsData(response.data);
        });
    }, []);

    const handleBlockButtonClick = (blockId) => {
        setSelectedBlock(blockId);
        setSelectedFloor(""); // Reset selectedFloor when block button is clicked
    };

    const handleFloorSelect = (floor) => {
        setSelectedFloor(floor);
    };

    const handleAllotRoom = () => {
        return (
            <>
                {roomsdata.map(block => {
                    const hasFreeRooms = Object.keys(block).some(key => {
                        return key !== "block_id" && key !== "block_name" && block[key].length > 0;
                    });

                    if (hasFreeRooms) {
                        return (
                            <div key={block.block_id}>
                                <button onClick={() => handleBlockButtonClick(block.block_id)}>{block.block_name}</button>
                            </div>
                        );
                    }
                    return null;
                })}
            </>
        );
    };

    const allotRoom = () => {
        if (selectedBlock && selectedFloor) {
            const block = roomsdata.find(block => block.block_id === selectedBlock);
            const floor = block[selectedFloor];
            const roomNumber = floor.shift();
            setRoomNumber(roomNumber);
            axios.post('/room_allot', { id, roomNumber }).then(response => {
                // reload the page
                window.location.reload();
                // also change the state of the room number in memory
            });
        }
        else {
            alert("Please select block and floor");
        }
    }

    return (
        <>
            {roomNumber ? (
                <p>Room already allotted: {roomNumber}</p>
            ) : (
                <>
                    {handleAllotRoom()}
                    {selectedBlock && (
                        <div className="dropdown-container">
                            <select value={selectedFloor} onChange={(e) => handleFloorSelect(e.target.value)}>
                                <option value="">Select Floor</option>
                                {roomsdata
                                    .filter(block => block.block_id === selectedBlock)
                                    .map(block => (
                                        Object.keys(block).filter(key => key.startsWith('floor')).map(floorKey => (
                                            <option key={floorKey} value={floorKey}>{floorKey}</option>
                                        ))
                                    ))}
                            </select>
                        </div>
                    )}
                    button to allot room
                    <button onClick={allotRoom}>Allot Room</button>
                </>
            )}
        </>
    );
}
