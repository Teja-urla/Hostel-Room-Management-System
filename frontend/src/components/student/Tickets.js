import React, { useState, useEffect } from 'react';
import axios from 'axios';
 // npm install react-icons
import { FaFilter, FaFileAlt, FaCommentAlt } from 'react-icons/fa';

const Tickets = ({ id }) => {

  // Function to get the correct tag name
  const getTagName = (tag) => {
    switch (tag) {
      case 'lift':
        return 'Lift';
      case 'washing_machine':
        return 'Washing Machine';
      case 'water_filter':
        return 'Water Filter';
      case 'bathroom':
        return 'Bathroom';
      case 'house_keeping':
        return 'House Keeping';
      case 'lan_status':
        return 'LAN Status';
      case 'electrical':
        return 'Electrical';
      case 'furniture':
        return 'Furniture';
      case 'civil_complaints':
        return 'Civil Complaints';
      case 'pest_control':
        return 'Pest Control';
      case 'green_office':
        return 'Green Office';
      default:
        return '';
    }
  };

  const [formData, setFormData] = useState({
    tag: '',
    title: '',
    ticket_description: '',
    file_upload: null,
    statusFilter: '' // Initialize statusFilter state
  });

  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/tickets/${id}`, {
        params: {
          status: formData.statusFilter // Pass status filter as a query parameter
        }
      });
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    var id=localStorage.getItem("userId");
    fetchTickets();
  }, [id, formData.statusFilter]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === 'file_upload' && files.length > 0 ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const formDataObject = new FormData();
    formDataObject.append('tag', formData.tag);
    formDataObject.append('title', formData.title);
    formDataObject.append('ticket_description', formData.ticket_description);
    formDataObject.append('file_upload', formData.file_upload);

    try {
      const response = await axios.post(`http://localhost:5000/tickets/${userId}`, formDataObject, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Ticket created successfully:', response.data);
      fetchTickets();
      setFormData({
        tag: '',
        title: '',
        ticket_description: '',
        file_upload: null
      });
      window.location.reload();
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
         <h2 className="text-center mb-4">Create New Ticket</h2>
          <div className="card p-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="tag">Tag:</label>
                <select name="tag" id="tag" className="form-control" value={formData.tag} onChange={handleChange}>
                  <option value="" disabled>-- Select Tag --</option>
                  <option value="lift">Lift</option>
                  <option value="washing_machine">Washing Machine</option>
                  <option value="water_filter">Water Filter</option>
                  <option value="bathroom">Bathroom</option>
                  <option value="house_keeping">House Keeping</option>
                  <option value="lan_status">LAN Status</option>
                  <option value="electrical">Electrical</option>
                  <option value="furniture">Furniture</option>
                  <option value="civil_complaints">Civil Complaints</option>
                  <option value="pest_control">Pest Control</option>
                  <option value="green_office">Green Office</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" className="form-control" value={formData.title} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="ticket_description">Description:</label>
                <textarea id="ticket_description" name="ticket_description" className="form-control" value={formData.ticket_description} onChange={handleChange}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="file_upload">File Upload:</label>
                <input type="file" id="file_upload" name="file_upload" className="form-control" onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary mt-3">Create Ticket</button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center mb-4">My Tickets</h2>
            </div>
            <div className="col-md-12 mb-3 text-end"> {/* Use text-end to align to the right */}
              <div className="input-group w-50"> {/* Use input-group to add the filter icon */}
                <select name="statusFilter" className="form-select form-select-sm w-auto" value={formData.statusFilter} onChange={handleChange}>
                  <option value="">Show All Tickets</option>
                  <option value="0">Show Open Tickets</option>
                  <option value="1">Show Closed Tickets</option>
                </select>
                <div className="input-group-append"> {/* Add the filter icon */}
                  <span className="input-group-text bg-white border-0">
                    <FaFilter />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {tickets.map(ticket => (
              <div key={`${ticket.id}-${ticket.raised_time}`} className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className={`badge bg-${ticket.ticket_status === 0 ? 'success' : 'danger'}`}>{ticket.ticket_status === 0 ? 'Open' : 'Closed'}</span>
                      <span className={`badge bg-dark`}>{getTagName(ticket.tag)}</span>
                    </div>
                  </div>
                  <div className="card-body text-center">
                    <h6 className="card-title" style={{ fontSize: '1rem' }}>{ticket.title}</h6>
                  </div>
                  <div className="card-footer text-end">
                    <button type="button" className="btn btn-sm btn-info text-white" data-bs-toggle="modal" data-bs-target={`#ticketModal-${ticket.id}${ticket.raised_time}`}>
                      View Details
                    </button>
                  </div>
                </div>

                <div className="modal fade" id={`ticketModal-${ticket.id}${ticket.raised_time}`} tabIndex="-1" role="dialog" aria-labelledby={`ticketModalLabel-${ticket.id}${ticket.raised_time}`} aria-hidden="true">
                  <div className="modal-dialog modal-md" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">
                          <span className={`badge bg-${ticket.ticket_status === 0 ? 'success' : 'danger'}`}>{ticket.ticket_status === 0 ? 'Open' : 'Closed'}</span>
                          <span className={`ms-2 badge bg-${ticket.filtered === 0 ? 'info' : 'warning'}`}>{ticket.filtered === 0 ? 'Under HR Review' : 'Under HO Review'}</span>
                          <span className="ms-2 badge bg-dark">{getTagName(ticket.tag)}</span>
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <h5>{ticket.title}</h5>
                        <p>{ticket.ticket_description}</p>
                        {ticket.file_upload && (
                          <div className="mb-3">
                            <strong><FaFileAlt /></strong>{" "}
                            <a href={`http://localhost:5000/uploads/${ticket.file_upload}`} target="_blank" rel="noopener noreferrer" className="ms-2">
                              {ticket.file_upload}
                            </a>
                          </div>
                        )}
                        <div className="mb-3">
                          <strong><FaCommentAlt /></strong>{" "}
                          <span className="ms-2">{ticket.reply || 'No reply yet'}</span>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <div className="text-start">
                          {new Date(ticket.raised_time).toLocaleString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric',
                            timeZoneName: 'short'
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
