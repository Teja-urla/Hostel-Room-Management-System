import React, { useState, useEffect } from 'react';
import axios from './axios';

export default function HOAnnouncements() {
    const [announcements, setAnnouncements] = useState([]);
    const [editAnnouncement, setEditAnnouncement] = useState({});
    const [newAnnouncement, setNewAnnouncement] = useState({})
    useEffect(() => {
        var id = localStorage.getItem("userId");
        axios.get(`/hr_announcements/${id}`)
            .then((response) => {
                console.log(response.data);
                setAnnouncements(response.data);
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    }, []);

    const updateAnnouncement = () => {
        const id=editAnnouncement.id;
        axios.put(`/hr_announcements/${id}`, editAnnouncement)
            .then((response) => {
                console.log(response.data);
                //refresh the page
                window.location.reload();
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    };
    
    return (
        <>
        This page should show all the announcements posted by HR(id=hr.raman@iith.ac.in), also announcements posted by Hostel office (HO). For HR announcements, the HR should be able to update his announcement. To update an edit button should be provided. For HO announcements, the HR should not be able to update the announcement. When click on edit button a bootstrap modal should open with the announcement details prefilled in the form. The HR can edit the announcement and save it. The updated announcement should be reflected in the announcement list.
        <br />

        showing announcements for HR with edit button
        {
        announcements.map((announcement) => (
            <div key={`${announcement.id}-${announcement.created_at}`}>
                <h3>{announcement.title}</h3>
                <p>{announcement.content}</p>
                <p>{announcement.duration}</p>
                
                {announcement.id === localStorage.getItem("userId") && (
                    <button
                        onClick={() => {
                            setEditAnnouncement({
                                id: announcement.id,
                                title: announcement.title,
                                content: announcement.content,
                                duration: announcement.duration,
                                created_at: announcement.created_at
                            });
                            console.log(editAnnouncement);
                        }}
                        className="btn btn-primary"
                        data-bs-target="#editAnnouncementModal"
                        data-bs-toggle="modal"
                    >
                        Edit
                    </button>
                )}
            </div>
        ))
    }

<div class="modal fade" id="editAnnouncementModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit announcement</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
    <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
            type="text"
            className="form-control"
            id="title"
            value={editAnnouncement.title}
            onChange={(e) => setEditAnnouncement(prevState => ({
                ...prevState,
                title: e.target.value
            }))}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="content" className="form-label">Content</label>
        <input
            type="text"
            className="form-control"
            id="content"
            value={editAnnouncement.content}
            onChange={(e) => setEditAnnouncement(prevState => ({
                ...prevState,
                content: e.target.value
            }))}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="duration" className="form-label">Duration</label>
        <input
            type="text"
            className="form-control"
            id="duration"
            value={editAnnouncement.duration}
            onChange={(e) => setEditAnnouncement(prevState => ({
                ...prevState,
                duration: e.target.value
            }))}
        />
    </div>
</form>

        

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={updateAnnouncement}>Save changes</button>
      </div>
    </div>
  </div>
</div>

        form for new announcement
        <form>
    <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
            type="text"
            className="form-control"
            id="title"
            value={newAnnouncement.title}
            onChange={(e) => setNewAnnouncement(prevState => ({
                ...prevState,
                title: e.target.value
            }))}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="content" className="form-label">Content</label>
        <input
            type="text"
            className="form-control"
            id="content"
            value={newAnnouncement.content}
            onChange={(e) => setNewAnnouncement(prevState => ({
                ...prevState,
                content: e.target.value
            }))}
        />

    </div>
    <div className="mb-3">
        <label htmlFor="duration" className="form-label">Duration</label>
        <input
            type="text"
            className="form-control"
            id="duration"
            value={newAnnouncement.duration}
            onChange={(e) => setNewAnnouncement(prevState => ({
                ...prevState,
                duration: e.target.value
            }))}
        />
    </div>
    <button type="button" className="btn btn-primary" onClick={() => {
        // insert id into newAnnouncement
        const id=localStorage.getItem("userId");
        setNewAnnouncement(prevState => ({
            ...prevState,
            id: id
        }));
        axios.post('/hr_announcements', newAnnouncement)
            .then((response) => {
                console.log(response.data);
                //refresh the page
                window.location.reload();
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    }
    }>
        Add announcement
    </button>
</form>

        </>
    );
}
