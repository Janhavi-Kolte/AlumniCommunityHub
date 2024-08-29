
import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'http://localhost:8081', // Base URL of your Spring Boot API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define API methods using the Axios instance
export const registerUser = (userData) => {
  return apiClient.post('/alumni', userData);
};

export const loginUser = (credentials) => {
  // Send credentials as an object
  return apiClient.post('/alumni/login', {
    email: credentials.email,
    password: credentials.password
  });
};

export const getAllUsers = () => {
   return apiClient.get('/users');
};

// Add more methods as needed

//student
export const registerStudent = (data) => {
  return apiClient.post('/stuRegister', data);
};


// This are Student Validation 

export const loginStudent = (scredentials) => {
  return apiClient.post('/student/login' , scredentials) ; 
};

export const registerStu = (studentData) => {
  return apiClient.post('/students/stuRegister', studentData);

}

export const getAllStudent = () => {
  return apiClient.get('/students');
};


//for admin

// Fetch all alumni
export const fetchAlumni = async () => {
  return await apiClient.get('/alumni/all');
};

// Add a new alumni
export const addAlumni = async (data) => {
  return await apiClient.post('/alumni', data);
};

// Update an existing alumni
export const updateAlumni = async (id, data) => {
  return await apiClient.put(`/alumni/${id}`, data);
};

// Delete an alumni
export const deleteAlumni = async (id) => {
  return await apiClient.delete(`/alumni/${id}`);
};


//This is for Event Manager

// Fetch all event
export const fetchEvent = async () => {
  return await apiClient.get('/getEvents');
};

// Add a new event
export const addEvent = async (data) => {
  return await apiClient.post('/getEvents/add', data);
};

// Update an existing event
export const updateEvent = async (id, data) => {
  return await apiClient.put(`/getEvents/${id}`, data);
};

// Delete an event
export const deleteEvent = async (id) => {
  return await apiClient.delete(`events/alumni/${id}`);
};

// Register a student for an event
export const registerForEvent = async (eventId, studentName) => {
  return await apiClient.post(`/events/${eventId}/register`, { studentName });
};

// **Event Management API Methods**

// Fetch events from the API
export const fetchStdEvent = async () => {
  return await apiClient.get('/events'); // Update the endpoint as needed
};

// Submit a query
export const submitQuery = async (query) => {
  return await apiClient.post('/queries', { query }); // Update the endpoint as needed
};


// Fetch education news
export const fetchEducationNews = async () => {
  const apiKey = '6e0f2e77fd26497080bcb30541d6c35d'; // Replace with your actual News API key
  const url = `https://newsapi.org/v2/top-headlines?category=education&apiKey=${apiKey}`;
  return await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6e0f2e77fd26497080bcb30541d6c35d');
};


//for alumni
// Add a job opportunity
export const addJobOpportunity = async (jobData) => {
  return await apiClient.post('/getEvents/register', jobData); // Adjust endpoint as necessary
};

// Request an event
export const requestEvent = async (eventRequest) => {
  return await apiClient.post('/event-requests', eventRequest); // Adjust endpoint as necessary
};

// Fetch profile of the logged-in alumni
export const fetchProfile = async () => {
  return await apiClient.get('/alumni'); // Adjust endpoint as necessary
};
