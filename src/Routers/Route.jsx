import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PraivateRoute from "./PraivateRoute";
import ErrorPage from "../components/ErrorPage";
import Product from "../Pages/Product-Category/product";
import Productdetails from "../Pages/Product-Details/Productdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PraivateRoute>
        <Main></Main>
      </PraivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Product></Product>,
      },
      {
        path: "details/:category",
        element: <Productdetails />,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);

export default router;
