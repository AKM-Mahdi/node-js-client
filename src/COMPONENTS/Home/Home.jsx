import React, { useState } from "react";

const Home = () => {
  const [user, setUser] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    e.target.reset();
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const updatedUserList = { ...user };
    updatedUserList[field] = value;
    setUser(updatedUserList);
  };
  return (
    <div>
      <h1>Submit to check</h1>
      <form onSubmit={handleSubmit}>
        <input onBlur={handleOnBlur} type="text" name="name" />
        <br />
        <input onBlur={handleOnBlur} type="email" name="email" />
        <br />
        <input onBlur={handleOnBlur} type="text" name="address" />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Home;
