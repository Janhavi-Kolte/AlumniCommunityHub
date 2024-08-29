
import React, { useState, useEffect } from 'react';
import { fetchEvent, updateEvent, addEvent, deleteEvent, registerForEvent } from '../Service/ApiService';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// Add Event Form Component
const AddEventForm = ({ onSave }) => {
  const [event, setEvent] = useState({
    eventName: '',
    eventDate: '',
    eventLocation: '',
    eventDescription: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSave(event);
  };

  return (
    <div className='container mt-4'>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(event).map((key) => (
          <div className='form-group' key={key}>
            <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</label>
            <input
              id={key}
              className='form-control'
              type={key === 'eventDate' ? 'date' : 'text'}
              name={key}
              value={event[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button className='btn btn-primary' type="submit">Add Event</button>
      </form>
    </div>
  );
};

// Update Event Form Component
const UpdateEventForm = ({ onUpdate }) => {
  const [id, setId] = useState('');
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchEventDetails = async () => {
        const response = await fetchEvent();
        const foundEvent = response.data.find((e) => e.id === id);
        setEvent(foundEvent);
      };
      fetchEventDetails();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onUpdate(id, event);
  };

  return (
    <div className='container mt-4'>
      <h2>Update Event</h2>
      <div className='form-group'>
        <input
          className='form-control'
          type="text"
          placeholder="Enter Event ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
       
      </div>
      <button className='btn btn-primary' type="submit">Update Event</button>
      {event && (
        <form onSubmit={handleSubmit}>
          {Object.keys(event).map((key) => (
            <div className='form-group' key={key}>
              <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</label>
              <input
                id={key}
                className='form-control'
                type={key === 'eventDate' ? 'date' : 'text'}
                name={key}
                value={event[key]}
                onChange={handleChange}
                required
              />
               
            </div>
          ))}
         
        </form>
      )}
    </div>
  );
};

// Delete Event Form Component
const DeleteEventForm = ({ onDelete }) => {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onDelete(id);
  };

  return (
    <div className='container mt-4'>
      <h2>Delete Event</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="eventId">Event ID to delete:</label>
          <input
            id="eventId"
            className='form-control'
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <button className='btn btn-danger' type="submit">Delete Event</button>
      </form>
    </div>
  );
};

// Register for Event Form Component
const RegisterEventForm = () => {
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState('');
  const [studentName, setStudentName] = useState('');

  useEffect(() => {
    const loadEvents = async () => {
      const response = await fetchEvent();
      setEvents(response.data);
    };
    loadEvents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerForEvent(selectedEventId, studentName);
    alert('Registration successful!');
    setStudentName('');
    setSelectedEventId('');
  };

  return (
    <div className='container mt-4'>
      <h2>Register for Event</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="studentName">Student Name:</label>
          <input
            id="studentName"
            className='form-control'
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="eventSelect">Select Event:</label>
          <select
            id="eventSelect"
            className='form-control'
            value={selectedEventId}
            onChange={(e) => setSelectedEventId(e.target.value)}
            required
          >
            <option value="" disabled>Select an event</option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.eventName}
              </option>
            ))}
          </select>
        </div>
        <button className='btn btn-primary' type="submit">Register</button>
      </form>
    </div>
  );
};

// View Events Component
const ViewEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const response = await fetchEvent();
      setEvents(response.data);
    };
    loadEvents();
  }, []);

  return (
    <div className='container mt-4'>
      <h2>View Events</h2>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Event Location</th>
            <th>Event Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.eventName}</td>
              <td>{event.eventDate}</td>
              <td>{event.eventLocation}</td>
              <td>{event.eventDescription}</td>
              <td>{event.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Main AdminDashboard Component
const EventDashboard = () => {
  const [view, setView] = useState('view');

  const handleAddEvent = async (event) => {
    await addEvent(event);
    setView('view');
  };

  const handleUpdateEvent = async (id, event) => {
    await updateEvent(id, event);
    setView('view');
  };

  const handleDeleteEvent = async (id) => {
    await deleteEvent(id);
    setView('view');
  };

  return (
    <div className='background-image'>
        <div className='container mt-4'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <button className='btn btn-outline-primary' onClick={() => setView('add')}>Add Event</button>
        <button className='btn btn-outline-primary' onClick={() => setView('update')}>Update Event</button>
        <button className='btn btn-outline-primary' onClick={() => setView('delete')}>Delete Event</button>
        <button className='btn btn-outline-primary' onClick={() => setView('view')}>View Events</button>
        <button className='btn btn-outline-primary' onClick={() => setView('register')}>Register for Event</button>
        <Link to='/' className='btn btn-outline-danger ml-2'>Log-Out</Link>
      </nav>

      {view === 'add' && <AddEventForm onSave={handleAddEvent} />}
      {view === 'update' && <UpdateEventForm onUpdate={handleUpdateEvent} />}
      {view === 'delete' && <DeleteEventForm onDelete={handleDeleteEvent} />}
      {view === 'view' && <ViewEvents />}
      {view === 'register' && <RegisterEventForm />}
    </div>
    </div>
    
  );
};

export default EventDashboard;