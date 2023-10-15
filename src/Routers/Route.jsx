import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Main from "../LayOut/Main";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";

  const router = createBrowserRouter([
    {
       path: "/",
       element: <Main></Main>,
       children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
    ]
    },
  ]);

export default router;
