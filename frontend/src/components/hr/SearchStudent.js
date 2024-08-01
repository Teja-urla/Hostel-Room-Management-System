import React from 'react';
import { useEffect, useState } from "react";

import axios from './axios';
// import Floors from './floors';
function SearchStudent() {

{/* Read hostel_blocks data from the database */}
const [myHostelBlocks, setMyHostelBlocks] = useState([]);

useEffect(() => {
axios.get("/hostel_blocks") // passing the parameter here
.then((res) => {
console.log(res.data) // data which is in syntax
setMyHostelBlocks(res.data) // data which is in syntax but not the data in useState in line 11
})
.catch((error)=> console.log("ERROR IN HOSTEL BLOCKS:"));
} , [])

{/* sending the block_id to the backend */}
const [selectedBlockId, setselectedBlockId] = useState(
  {
    block_id: ''
  }
);

const SelectChange_BlockID = (event) => {
     setselectedBlockId({ block_id: event.target.value });
     console.log("selectedBlockId: ", selectedBlockId);
  };

{/*send the selectedBlockId to the same axios */}
const [myFLoors, setMyFloors] = useState([]);
const handleSubmit = (e) => {
  console.log("selectedBlockId: ", selectedBlockId);
  axios.post('/floors', selectedBlockId)
      .then((res) => {
          console.log("hostel_blocks: [][][][ ", res.data); // we got floors here for the respective 
          setMyFloors(res.data);

      })
      .catch((error) => console.log("Error:", error));
}

{/* sending the floor and pod to the backend */}
const [selectFloor, setselectFloor] = useState(
  {
    floor_num: '',
    pod_num: ''
  }
);

const onChangeFloor = (event) => {
  setselectFloor({ ...selectFloor, [event.target.name]: event.target.value });
  console.log("selectFloor: ", selectFloor);
};

const [Users, setUsers] = useState([]);
const handleSubmit_floor_pod = (e) => {
  console.log("selectFloor: ", selectFloor);
  axios.post('/floor_pod', selectFloor)
      .then((res) => {
          console.log("hostel_blocks: [][][][ ", res.data); // we got floors here for the respective
          setMyFloors(res.data);
          setUsers(res.data);
      })
      .catch((error) => console.log("Error:", error));
}


return(
<>
<div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Select Hostel Block:</h4>
                    <select className="form-select mb-3" name="Hostel Blocks" onChange={SelectChange_BlockID}>
                        {myHostelBlocks.map((hostel_blocks) => (
                            <option key={hostel_blocks.block_id} value={hostel_blocks.block_id}>
                                {hostel_blocks.block_id}
                            </option>
                        ))}
                    </select>
                    <button type="button" className="btn btn-warning mb-3" onClick={(e) => handleSubmit(e)}>Submit Hostel Block</button>

                    <h4 className="card-title">Select Floor:</h4>
                    <select className="form-select mb-3" name="floor_num" value={selectFloor.floor_num} onChange={onChangeFloor}>
                        {myFLoors.map((floors) => (
                            <option key={floors.floor_number} value={floors.floor_number}>
                                {floors.floor_number}
                            </option>
                        ))}
                    </select>
                    <h4 className="card-title">Select Pod:</h4>
                    <select className="form-select mb-3" name="pod_num" value={selectFloor.pod_num} onChange={onChangeFloor}>
                        <option key="1" value="1">1</option>
                        <option key="2" value="2">2</option>
                        <option key="3" value="3">3</option>
                        <option key="4" value="4">4</option>
                    </select>
                    <button type="button" className="btn btn-danger mb-3" onClick={(e) => handleSubmit_floor_pod(e)}>Submit Floor and Pod</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="container mt-5">
    <div className="row">
        <div className="col-md-12 text-center mb-3">
            <h2>Student List</h2>
        </div>
        {Users.length > 0 ? (
            Users.map((user) => (
                <div key={user.id} className="col-md-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{user.username}</h5>
                            <p className="card-text">Room Number: {user.room_number}</p>
                            <p className="card-text">Phone Number: {user.phone_number}</p>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <div className="col-md-12">
                <p>NO STUDENTS</p>
            </div>
        )}
    </div>
</div>


</>

);}

export default SearchStudent;