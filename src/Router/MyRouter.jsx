import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Amazon from "../Components/Amazon/Amazon";

const MyRouter = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addProduct',
            element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
        },
        {
            path: '/myCart',
            element: <PrivateRouter><MyCart></MyCart></PrivateRouter>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
        {
            path: '/amazon',
            element: <Amazon></Amazon>
        }
      ]
    },
  ]);

export default MyRouter;