import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const data = useLoaderData();
  const [user, setUser] = useState(data);

  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(user);
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      res.json().then((data) => {
        if (data.modifiedCount > 0) {
          alert("User Updated");
        }
      })
    );
  };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const updatedUserList = { ...user };
    updatedUserList[field] = value;
    setUser(updatedUserList);
    // console.log(updatedUserList);
  };

  return (
    <div>
      <h1>Update Data</h1>
      <form onSubmit={handleUpdate}>
        <input
          onChange={handleOnChange}
          defaultValue={data.name}
          type="text"
          name="name"
          placeholder="name"
        />
        <br />
        <input
          onChange={handleOnChange}
          defaultValue={data.email}
          type="email"
          name="email"
        />
        <br />
        <input
          onChange={handleOnChange}
          defaultValue={data.address}
          type="text"
          name="address"
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Update;
