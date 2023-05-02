import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);

  const handleDelete = (user) => {
    const agree = window.confirm(`are you sure to delete: ${user.name}`);
    console.log(agree);
    if (agree) {
      console.log("deleting user id", user._id);
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("User deleted successfully");
            const remaining = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUsers(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h1>Users: {displayUsers.length}</h1>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} <br /> {user.email}{" "}
            <button onClick={() => handleDelete(user)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
