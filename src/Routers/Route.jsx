import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";

  const router = createBrowserRouter([
    {
       path: "/",
       element: <Main></Main>,
       children: [
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