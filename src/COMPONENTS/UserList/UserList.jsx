import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UserList = () => {
  const users = useLoaderData();
  const [displayUser, setDisplayUser] = useState(users);

  const handleDelete = (user) => {
    const agree = window.confirm("are you sure you want to delete?");
    // console.log(user);
    if (agree) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully Deleted User");
            const updatedUser = users.filter((item) => item._id !== user._id);
            setDisplayUser(updatedUser);
          }
        });
    }
  };
  console.log(users);
  return (
    <div>
      <h2>User List {displayUser.length}</h2>
      {displayUser.map((item) => (
        <div className="card" key={item._id}>
          <span>{item.name}</span>
          <span>{item.email}</span>
          <button onClick={() => handleDelete(item)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
