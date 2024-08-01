import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const blockNames = {
  A: 'Aryabhatta',
  B: 'Bhaskara',
  C: 'Charaka',
  D: 'Susruta',
  E: 'Kautilya',
  F: 'Vyasa',
  G: 'Brahmagupta',
  H: 'Varahamihira'
};

const getBlockAndFloor = (floorNumber) => {
  const block = blockNames[floorNumber[0]];
  const floor = floorNumber.slice(1);
  return { block, floor };
};

const formatDateTime = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);
  return dateTime.toLocaleString('en-US', { hour12: true });
};

const MyPod = ({ id }) => {
  const [floorData, setFloorData] = useState(null);
  const [podMates, setPodMates] = useState([]);

  useEffect(() => {
    var id=localStorage.getItem("userId");

    const fetchFloorData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/myPod/${id}`);
        setFloorData(response.data.floorData);
        setPodMates(response.data.podMates);
      } catch (error) {
        console.error('Error fetching floor details:', error);
      }
    };

    fetchFloorData();
  }, []);

  if (!floorData) {
    return <div>Loading...</div>;
  }

  const { block, floor } = getBlockAndFloor(floorData.floor_number);

  return (
    <div className="container">

      <h2 className='my-2'>Pod Mates</h2>
      <div className="row">
        {podMates.map((mate, index) => (
          <div className="col-md-3 mb-3" key={mate.id}>
            <Link to={`/MyProfile?id=${mate.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card">
                <div className="card-header text-center"><strong>{mate.room_number}</strong></div>
                <div className="card-body text-center">
                  <p className="card-title"><strong>Name:</strong> {mate.username}</p>
                  <p className="card-text"><strong>ID:</strong> {mate.id}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <hr/>

      <h3 className='my-4'>{block} Floor-{floor} Facilities</h3>
      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="border rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Lift</h5>
              <span className={`badge bg-${floorData.lift_working_status ? 'success' : 'danger'}`}>
                {floorData.lift_working_status ? 'Working' : 'Not Working'}
              </span>
            </div>
            <div className="mt-3">
              <p className="timestamp-text">Last serviced at {new Date(floorData.lift_last_serviced).toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="border rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Washing Machine</h5>
              <span className={`badge bg-${floorData.washing_machine_working_status ? 'success' : 'danger'}`}>
                {floorData.washing_machine_working_status ? 'Working' : 'Not Working'}
              </span>
            </div>
            <div className="mt-3">
              <p className="timestamp-text">Last serviced at {new Date(floorData.washing_machine_last_serviced).toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="border rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Water Purifier</h5>
              <span className={`badge bg-${floorData.water_purifier_working_status ? 'success' : 'danger'}`}>
                {floorData.water_purifier_working_status ? 'Working' : 'Not Working'}
              </span>
            </div>
            <div className="mt-3">
              <p className="timestamp-text">Last serviced at {new Date(floorData.water_purifier_last_serviced).toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="border rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Bathroom Facilities</h5>
              <span className={`badge bg-${floorData.bathroom_working_status ? 'success' : 'danger'}`}>
                {floorData.bathroom_working_status ? 'Working' : 'Not Working'}
              </span>
            </div>
            <div className="mt-3">
              <p className="timestamp-text">Last serviced at {new Date(floorData.bathroom_last_serviced).toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="border rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Housekeeping</h5>
              <span className={`badge bg-${floorData.housekeeping_working_status ? 'success' : 'danger'}`}>
                {floorData.housekeeping_working_status ? 'Regular' : 'Not Regular'}
              </span>
            </div>
            <div className="mt-3">
              <p className="timestamp-text">Last serviced at {new Date(floorData.housekeeping_last_serviced).toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPod;
