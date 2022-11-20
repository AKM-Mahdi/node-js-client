import { createBrowserRouter } from "react-router-dom";
import Home from "../COMPONENTS/Home/Home";
import Update from "../COMPONENTS/Update/Update";
import UserList from "../COMPONENTS/UserList/UserList";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/users",
    element: <UserList></UserList>,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/users/:id",
    element: <Update></Update>,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
  },
]);
