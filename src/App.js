import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users").then((res) =>
      res.json().then((data) => setUsers(data))
    );
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => console.error(err));

    e.target.reset();
  };

  return (
    <div className="App">
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <button type="submit">Add User</button>
      </form>

      {users.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
}

export default App;
