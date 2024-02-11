import React, { useState } from 'react';
import axios from 'axios';

function StudentSignup() {
  const [userData, setUserData] = useState({    
    name: "ashish",
    age: 20,
    gender: "Male",
    phoneNo: "3215588954",
    email: "ashish@gmail.com",
    password: "12345",
    address: "korba",
    joiningDate: "2024-02-11"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/users/student_signup', userData);
      console.log(response.data);
      // Reset the form after successful submission
      setUserData({
        name: "ashish",
        age: 20,
        gender: "Male",
        phoneNo: "3215588954",
        email: "ashish@gmail.com",
        password: "12345",
        address: "ghar",
        joiningDate: "2024-02-11"
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

    return (
    <form onSubmit={handleSubmit} className="container mt-4">
        <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="form-control"
            required
        />
        </div>
        <div className="mb-3">
        <label className="form-label">Age:</label>
        <input
            type="number"
            name="age"
            value={userData.age}
            onChange={handleChange}
            className="form-control"
            required
        />
        </div>
        <div className="mb-3">
        <label className="form-label">Gender:</label>
        <input
            type="text"
            name="gender"
            value={userData.gender}
            onChange={handleChange}
            className="form-control"
            required
        />
        </div>
        <div className="mb-3">
        <label className="form-label">Phone Number:</label>
        <input
            type="text"
            name="phoneNo"
            value={userData.phoneNo}
            onChange={handleChange}
            className="form-control"
            required
        />
        </div>
        <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="form-control"
            required
        />
        </div>
        <div className="mb-3">
        <label className="form-label">Password:</label>
        <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="form-control"
            required
        />
        </div>
        <div className="mb-3">
        <label className="form-label">Address:</label>
        <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
            className="form-control"
            required
        />
        </div>
        <div className="mb-3">
        <label className="form-label">Joining Date:</label>
        <input
            type="text"
            name="joiningDate"
            value={userData.joiningDate}
            onChange={handleChange}
            className="form-control"
            required
        />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );

}

export default StudentSignup;
