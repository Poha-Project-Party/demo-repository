import React, { useState } from 'react';

function SignUp() {
  const [userData, setUserData] = useState({
    id: 1,
    name: "ashish",
    age: 20,
    gender: "Male",
    phoneNo: "3215588954",
    email: null,
    role: "TEACHER",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    // Reset the form after printing data
    setUserData({
      id: 1,
      name: "",
      age: 0,
      gender: "",
      phoneNo: "",
      email: "",
      role: "",
      address: "",
      degree: "",
      specialization: ""
    });
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
        <label>Role:</label>
        <input
          type="text"
          name="role"
          value={userData.role}
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
