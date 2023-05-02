import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    fetch('http://localhost:5000/users', {
        method:'POST',
        headers: {
            'content-type': 'application/json',
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
  };

  const handleInputBlur = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h2>Please add a new user</h2>
      <form onSubmit={handleSubmit}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="address"
          placeholder="address"
          required
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
