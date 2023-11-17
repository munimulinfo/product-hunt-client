import { createBrowserRouter } from "react-router-dom";

import Main from "../LayOut/Main";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import AllRells from "../Pages/AllRells";
import PraivateRoute from "./PraivateRoute";
import MyRells from "../Pages/MyRells";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PraivateRoute><Main></Main></PraivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <PraivateRoute><AllRells></AllRells></PraivateRoute>
      },
      {
        path: 'myrells',
        element: <PraivateRoute><MyRells></MyRells></PraivateRoute>,
      }
    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  }

]);

export default router;
