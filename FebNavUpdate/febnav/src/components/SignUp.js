import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [userData, setUserData] = useState({
    name: "ashish",
    age: 20,
    gender: "Male",
    phoneNo: "3215588954",
    email: "ashish@gmail.com",
    password: "12345",
    address: "korba",
    degree: "B.E",
    specialization: "kuchbhi"
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
      const response = await axios.post('http://localhost:8080/users/teacher_signup', userData);
      console.log(response.data);
      // Reset the form after successful submission
      setUserData({
        name: "ashish",
        age: 20,
        gender: "Male",
        phoneNo: "3215588954",
        email: "ashish@gmail.com",
        password: "12345",
        address: "korba",
        degree: "B.E",
        specialization: "kuchbhi"
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={userData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={userData.gender}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNo"
          value={userData.phoneNo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={userData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Degree:</label>
        <input
          type="text"
          name="degree"
          value={userData.degree}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Specialization:</label>
        <input
          type="text"
          name="specialization"
          value={userData.specialization}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;
