import React from "react";
import { useLoaderData } from "react-router-dom";

const UserList = () => {
  const users = useLoaderData();

  const handleDelete = (user) => {
    const agree = window.confirm("are you sure you want to delete?");
    console.log(agree);
  };
  console.log(users);
  return (
    <div>
      <h2>User List {users.length}</h2>
      {users.map((item) => (
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
