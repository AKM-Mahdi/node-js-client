import React, { useState } from "react";

const Home = () => {
  const [user, setUser] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const updatedUserList = { ...user };
    // console.log(updatedUserList);
    updatedUserList[field] = value;
    setUser(updatedUserList);
  };
  return (
    <div>
      <h1>Submit to check</h1>
      <form onSubmit={handleSubmit}>
        <input onBlur={handleOnBlur} type="text" name="name" id="" />
        <br />
        <input onBlur={handleOnBlur} type="email" name="email" id="" />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Home;
