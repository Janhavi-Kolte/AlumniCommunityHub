// src/pages/StudentDashboard.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEvent, fetchEducationNews, submitQuery } from '../Service/ApiService';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState('');
  const [querySubmitted, setQuerySubmitted] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showNews, setShowNews] = useState(false);
  const [showJobs, setShowJobs] = useState(false);
  const [news, setNews] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch job opportunities from local storage
  useEffect(() => {
    const fetchJobs = () => {
      const storedJobs = JSON.parse(localStorage.getItem('jobOpportunities')) || [];
      setJobs(storedJobs);
    };

    fetchJobs();
  }, []);

  // Fetch events from the API
  useEffect(() => {
    if (showEvents) {
      const loadEvents = async () => {
        try {
          const response = await fetchEvent();
          setEvents(response.data);
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      };
      loadEvents();
    }
  }, [showEvents]);

  // Fetch education news from NewsAPI
  const loadEducationNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchEducationNews();
      setNews(response.data.articles);
    } catch (error) {
      console.error('Error fetching education news:', error);
      setError('Failed to load news.');
    } finally {
      setLoading(false);
    }
  };

  // Handle query form submission
  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    try {
      await submitQuery(query);
      setQuery('');
      setQuerySubmitted(true);
    } catch (error) {
      console.error('Error submitting query:', error);
    }
  };

  // Toggle view sections
  const toggleEventsView = () => {
    setShowEvents((prev) => !prev);
    if (!showEvents) {
      setShowNews(false);
      setShowJobs(false);
    }
  };

  const toggleNewsView = () => {
    setShowNews((prev) => !prev);
    if (!showNews) {
      loadEducationNews();
      setShowEvents(false);
      setShowJobs(false);
    }
  };

  const toggleJobsView = () => {
    setShowJobs((prev) => !prev);
    if (!showJobs) {
      setShowEvents(false);
      setShowNews(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    navigate('/'); // Redirect to login page
  };

  return (
    <div className='container mt-4'>
      <h1>Student Portal</h1>

      {/* Buttons to toggle between sections */}
      <div className='mb-4'>
        <button className='btn btn-primary me-2' onClick={toggleEventsView}>
          {showEvents ? 'Hide Events' : 'View Events'}
        </button>
        <button className='btn btn-primary me-2' onClick={toggleNewsView}>
          {showNews ? 'Hide News' : 'View Education News'}
        </button>
        <button className='btn btn-primary' onClick={toggleJobsView}>
          {showJobs ? 'Hide Job Opportunities' : 'View Job Opportunities'}
        </button>
        <button className='btn btn-danger ms-2' onClick={handleLogout}>
          Log Out
        </button>
      </div>

      {/* Display Events */}
      {showEvents && (
        <div>
          <h2>Upcoming Events</h2>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Event Name</th>
                <th>Event Date</th>
                <th>Event Location</th>
                <th>Event Description</th>
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
                </tr>
              ))}
            </tbody>
          </table>

          {/* Query Form Section */}
          <div className='mb-4'>
            <h2>Submit Your Query</h2>
            <form onSubmit={handleQuerySubmit}>
              <div className='mb-3'>
                <label className='form-label' htmlFor='query'>Your Query:</label>
                <textarea
                  id='query'
                  className='form-control'
                  rows='4'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  required
                />
              </div>
              <button className='btn btn-primary' type='submit'>Submit Query</button>
              {querySubmitted && <div className='mt-3 alert alert-success'>Your query has been submitted successfully!</div>}
            </form>
          </div>

          {/* Chatbot Link Section */}
          <div>
            <h2>Need Help?</h2>
            <p>If you need further assistance, you can reach out to our chatbot:</p>
            <a href='https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=d20ecff7-919a-4843-bb60-0d7ea7a8dfcb' className='btn btn-info' target='_blank' rel='noopener noreferrer'>Chat with Bot</a>
          </div>
        </div>
      )}

      {/* Display News */}
      {showNews && (
        <div>
          <h1>Education News</h1>
          {loading && <p>Loading...</p>}
          {error && <div className='alert alert-danger'>{error}</div>}
          <ul className='list-group'>
            {news.map((article, index) => (
              <li key={index} className='list-group-item'>
                <h5><a href={article.url} target='_blank' rel='noopener noreferrer'>{article.title}</a></h5>
                <p>{article.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display Job Opportunities */}
      {showJobs && (
        <div>
          <h2>Job Opportunities</h2>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Description</th>
                <th>Company</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length > 0 ? (
                jobs.map((job, index) => (
                  <tr key={index}>
                    <td>{job.title}</td>
                    <td>{job.description}</td>
                    <td>{job.company}</td>
                    <td>{job.location}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No job opportunities available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;