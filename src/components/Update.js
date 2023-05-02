import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const storedUser = useLoaderData();

  const [user, setUser] = useState(storedUser);
  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log(storedUser);
    console.log(user)
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newUser = { ...storedUser };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h1>Please Update {storedUser.name}</h1>
      <form onSubmit={handleUpdateUser}>
        <input
          defaultValue={storedUser.name}
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <br />
        <input
          defaultValue={storedUser.address}
          onChange={handleInputChange}
          type="text"
          name="address"
          placeholder="address"
          required
        />
        <br />
        <input
          defaultValue={storedUser.email}
          onChange={handleInputChange}
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default Update;
