import { createBrowserRouter } from "react-router-dom";
import Home from "../COMPONENTS/Home/Home";
import UserList from "../COMPONENTS/UserList/UserList";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/users",
    element: <UserList></UserList>,
  },
]);
