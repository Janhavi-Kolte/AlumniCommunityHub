import React, { useState, useEffect } from 'react';
import { fetchAlumni, addAlumni, updateAlumni, deleteAlumni } from '../Service/ApiService';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

// Add User Form Component
const AddUserForm = ({ onSave }) => {
  const [user, setUser] = useState({
    collegeId: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    dob: '',
    passoutYear: '',
    degree: '',
    specialization: '',
    specializationHigher: '',
    universityName: '',
    yopHigher: '',
    presentCompany: '',
    position: '',
    workExperience: '',
    city: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSave(user);
  };

  return (
    <div className='container mt-4'>
      <h2 className='mb-4'>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          {Object.keys(user).map((key) => (
            <div className='col-md-6 mb-3' key={key}>
              <label className='form-label' htmlFor={key}>
                {key.replace(/([A-Z])/g, ' $1').toUpperCase()}:
              </label>
              <input
                id={key}
                className='form-control'
                type={key === 'dob' ? 'date' : 'text'}
                name={key}
                value={user[key]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
        </div>
        <button className='btn btn-primary' type="submit">Add User</button>
      </form>
    </div>
  );
};

// Update User Form Component
const UpdateUserForm = ({ onUpdate }) => {
  const [id, setId] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        const response = await fetchAlumni();
        const foundUser = response.data.find((u) => u.college_Id === id);
        setUser(foundUser);
      };
      fetchUser();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onUpdate(id, user);
  };

  return (
    <div className='container mt-4'>
      <h2 className='mb-4'>Update User</h2>
      <div className='mb-3'>
        <input
          className='form-control'
          type="text"
          placeholder="Enter College ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <button className='btn btn-primary' type="submit">Update User</button>
      {user && (
        <form onSubmit={handleSubmit}>
          <div className='row'>
            {Object.keys(user).map((key) => (
              <div className='col-md-6 mb-3' key={key}>
                <label className='form-label' htmlFor={key}>
                  {key.replace(/([A-Z])/g, ' $1').toUpperCase()}:
                </label>
                <input
                  id={key}
                  className='form-control'
                  type={key === 'dob' ? 'date' : 'text'}
                  name={key}
                  value={user[key]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
          </div>
        
        </form>
      )}
    </div>
  );
};

// Delete User Form Component
const DeleteUserForm = ({ onDelete }) => {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onDelete(id);
  };

  return (
    <div className='container mt-4'>
      <h2 className='mb-4'>Delete User</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label' htmlFor="eventId">
            College ID to delete:
          </label>
          <input
            id="eventId"
            className='form-control'
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <button className='btn btn-danger' type="submit">Delete User</button>
      </form>
    </div>
  );
};

// View Users Component
const ViewUsers = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    const loadAlumni = async () => {
      const response = await fetchAlumni();
      setAlumni(response.data);
    };
    loadAlumni();
  }, []);

  return (
    <div className='container mt-4'>
      <h2 className='mb-4'>View Users</h2>
      <div className='table-responsive'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>YearOfPassing</th>
            <th>Degree</th>
            <th>Stream</th>
            <th>Post Graduation</th>
            <th>Specialization</th>
            <th>University</th>
            <th>Passsing Year</th>
            <th>Company</th>
            <th>Position</th>
            <th>Work Experience</th>
            <th>years</th>
            </tr>
          </thead>
          <tbody>
            {alumni.map((alumnus) => (
              <tr key={alumnus.collegeId}>
              <td>{alumnus.collegeId}</td>
              <td>{alumnus.firstName}</td>
              <td>{alumnus.lastName}</td>
              <td>{alumnus.email}</td>
              <td>{alumnus.passoutYear}</td>
              <td>{alumnus.degree}</td>
              <td>{alumnus.specialization}</td>
              <td>{alumnus.specializationHigher}</td>
              <td>{alumnus.specialization}</td>
              <td>{alumnus.universityName}</td>
              <td>{alumnus.yopHigher}</td>
              <td>{alumnus.presentCompany}</td>
              <td>{alumnus.position}</td>
              <td>{alumnus.workExperience}</td>   
                  
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main AdminDashboard Component
const AdminDashboard = () => {
  const [view, setView] = useState('view');

  const handleAddUser = async (user) => {
    await addAlumni(user);
    setView('view');
  };

  const handleUpdateUser = async (id, user) => {
    await updateAlumni(id, user);
    setView('view');
  };

  const handleDeleteUser = async (id) => {
    await deleteAlumni(id);
    setView('view');
  };

  return (
    <div className='container mt-4'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
        <div className='container'>
          <button className='btn btn-primary me-2' onClick={() => setView('add')}>Add User</button>
          <button className='btn btn-warning me-2' onClick={() => setView('update')}>Update User</button>
          <button className='btn btn-danger me-2' onClick={() => setView('delete')}>Delete User</button>
          <button className='btn btn-info me-2' onClick={() => setView('view')}>View Users</button>
          <Link to={'/'} className='btn btn-secondary'>Log-Out</Link>
        </div>
      </nav>

      {view === 'add' && <AddUserForm onSave={handleAddUser} />}
      {view === 'update' && <UpdateUserForm onUpdate={handleUpdateUser} />}
      {view === 'delete' && <DeleteUserForm onDelete={handleDeleteUser} />}
      {view === 'view' && <ViewUsers />}
    </div>
  );
};

export default AdminDashboard;