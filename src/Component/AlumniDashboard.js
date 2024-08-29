// src/pages/AlumniDashboard.js

import React, { useState, useEffect } from 'react';
import { addJobOpportunity, requestEvent, fetchProfile } from '../Service/ApiService';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlumniDashboard = () => {
  const [showAddJob, setShowAddJob] = useState(false);
  const [showRequestEvent, setShowRequestEvent] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [job, setJob] = useState({
    title: '',
    description: '',
    company: '',
    location: ''
  });
  const [eventRequest, setEventRequest] = useState({
    eventName: '',
    eventDate: '',
    eventLocation: '',
    eventDescription: ''
  });
  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileError, setProfileError] = useState(null);

  // Handle job opportunity form submission
  const handleJobSubmit = (e) => {
    e.preventDefault();
    // Get existing jobs from local storage
    const existingJobs = JSON.parse(localStorage.getItem('jobOpportunities')) || [];
    // Add new job
    const updatedJobs = [...existingJobs, job];
    // Save updated jobs to local storage
    localStorage.setItem('jobOpportunities', JSON.stringify(updatedJobs));
    // Clear form
    setJob({
      title: '',
      description: '',
      company: '',
      location: ''
    });
    alert('Job opportunity added!');
  };

  // Handle event request form submission
  const handleEventRequestSubmit = async (e) => {
    e.preventDefault();
    try {
      await requestEvent(eventRequest);
      setEventRequest({
        eventName: '',
        eventDate: '',
        eventLocation: '',
        eventDescription: ''
      });
      alert('Event request sent successfully!');
    } catch (error) {
      console.error('Error requesting event:', error);
    }
  };

  // Fetch profile on component mount
  useEffect(() => {
    if (showProfile) {
      const loadProfile = async () => {
        setProfileLoading(true);
        setProfileError(null);
        try {
          const response = await fetchProfile();
          setProfile(response.data);
        } catch (error) {
          console.error('Error fetching profile:', error);
          setProfileError('Failed to load profile.');
        } finally {
          setProfileLoading(false);
        }
      };
      loadProfile();
    }
  }, [showProfile]);

  // Toggle view sections
  const toggleAddJob = () => {
    setShowAddJob((prev) => !prev);
    if (!showAddJob) {
      setShowRequestEvent(false);
      setShowProfile(false);
    }
  };

  const toggleRequestEvent = () => {
    setShowRequestEvent((prev) => !prev);
    if (!showRequestEvent) {
      setShowAddJob(false);
      setShowProfile(false);
    }
  };

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
    if (!showProfile) {
      setShowAddJob(false);
      setShowRequestEvent(false);
    }
  };

  return (
    <div className='container mt-4'>
      <h1>Alumni Dashboard</h1>

      {/* Buttons to toggle between sections */}
      <div className='mb-4'>
        <button className='btn btn-primary me-2' onClick={toggleAddJob}>
          {showAddJob ? 'Hide Add Job Opportunity' : 'Add Job Opportunity'}
        </button>
        <button className='btn btn-primary me-2' onClick={toggleRequestEvent}>
          {showRequestEvent ? 'Hide Request Event' : 'Request Event'}
        </button>
        <button className='btn btn-primary' onClick={toggleProfile}>
          {showProfile ? 'Hide Profile' : 'View Profile'}
        </button>
      </div>

      {/* Add Job Opportunity */}
      {showAddJob && (
        <div>
          <h2>Add Job Opportunity</h2>
          <form onSubmit={handleJobSubmit}>
            <div className='mb-3'>
              <label className='form-label' htmlFor='title'>Job Title:</label>
              <input
                id='title'
                className='form-control'
                type='text'
                name='title'
                value={job.title}
                onChange={(e) => setJob({ ...job, title: e.target.value })}
                required
              />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor='description'>Job Description:</label>
              <textarea
                id='description'
                className='form-control'
                rows='4'
                name='description'
                value={job.description}
                onChange={(e) => setJob({ ...job, description: e.target.value })}
                required
              />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor='company'>Company:</label>
              <input
                id='company'
                className='form-control'
                type='text'
                name='company'
                value={job.company}
                onChange={(e) => setJob({ ...job, company: e.target.value })}
                required
              />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor='location'>Location:</label>
              <input
                id='location'
                className='form-control'
                type='text'
                name='location'
                value={job.location}
                onChange={(e) => setJob({ ...job, location: e.target.value })}
                required
              />
            </div>
            <button className='btn btn-primary' type='submit'>Add Job Opportunity</button>
          </form>
        </div>
      )}

      {/* Request Event */}
      {showRequestEvent && (
        <div>
          <h2>Request an Event</h2>
          <form onSubmit={handleEventRequestSubmit}>
            <div className='mb-3'>
              <label className='form-label' htmlFor='eventName'>Event Name:</label>
              <input
                id='eventName'
                className='form-control'
                type='text'
                value={eventRequest.eventName}
                onChange={(e) => setEventRequest({ ...eventRequest, eventName: e.target.value })}
                required
              />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor='eventDate'>Event Date:</label>
              <input
                id='eventDate'
                className='form-control'
                type='date'
                value={eventRequest.eventDate}
                onChange={(e) => setEventRequest({ ...eventRequest, eventDate: e.target.value })}
                required
              />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor='eventLocation'>Event Location:</label>
              <input
                id='eventLocation'
                className='form-control'
                type='text'
                value={eventRequest.eventLocation}
                onChange={(e) => setEventRequest({ ...eventRequest, eventLocation: e.target.value })}
                required
              />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor='eventDescription'>Event Description:</label>
              <textarea
                id='eventDescription'
                className='form-control'
                rows='4'
                value={eventRequest.eventDescription}
                onChange={(e) => setEventRequest({ ...eventRequest, eventDescription: e.target.value })}
                required
              />
            </div>
            <button className='btn btn-primary' type='submit'>Request Event</button>
          </form>
        </div>
      )}

      {/* View Profile */}
      {showProfile && (
        <div>
          <h2>My Profile</h2>
          {profileLoading && <p>Loading...</p>}
          {profileError && <div className='alert alert-danger'>{profileError}</div>}
          {profile && (
            <div>
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Graduation Year:</strong> {profile.graduationYear}</p>
              <p><strong>Current Job:</strong> {profile.currentJob}</p>
              {/* Add more profile details as needed */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AlumniDashboard;