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
import Walmart from "../Components/Walmart/Walmart";
import Alibaba from "../Components/Alibaba/Alibaba";
import EBay from "../Components/EBay/EBay";
import Target from "../Components/Target/Target";
import BestBuy from "../Components/BestBuy/BestBuy";
import UpdateForm from "../UpdatedForm/UpdateForm";
import BrandDetails from "../Components/BrandDetails/BrandDetails";

const MyRouter = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('/homeData.json')
        },
        {
            path: '/addProduct',
            element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
        },
        {
            path: '/myCart',
            element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
            loader: ()=> fetch('https://retail-and-e-commerce-based-server.vercel.app/carts')
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
            element: <Amazon></Amazon>,
            loader: ()=> fetch('https://retail-and-e-commerce-based-server.vercel.app/amazon')
        },
        {
            path: '/walmart',
            element: <Walmart></Walmart>,
            loader: ()=> fetch('https://retail-and-e-commerce-based-server.vercel.app/amazon')
        },
        {
            path: '/alibaba',
            element: <Alibaba></Alibaba>,
            loader: ()=> fetch('https://retail-and-e-commerce-based-server.vercel.app/amazon')
        },
        {
            path: '/eBay',
            element: <EBay></EBay>,
            loader: ()=> fetch('https://retail-and-e-commerce-based-server.vercel.app/amazon')
        },
        {
            path: '/target',
            element: <Target></Target>,
            loader: ()=> fetch('https://retail-and-e-commerce-based-server.vercel.app/amazon')
        },
        {
            path: '/bestBuy',
            element: <BestBuy></BestBuy>,
            loader: ()=> fetch('https://retail-and-e-commerce-based-server.vercel.app/amazon')
        },
        {
            path: '/updateForm/:id',
            element: <PrivateRouter><UpdateForm></UpdateForm></PrivateRouter>,
            loader: ({params})=> fetch(`https://retail-and-e-commerce-based-server.vercel.app/amazon/${params.id}`)
        },
        {
            path: '/details/:id',
            element: <BrandDetails></BrandDetails>,
            loader: ()=> fetch(`https://retail-and-e-commerce-based-server.vercel.app/amazon`)
        }
      ]
    },
  ]);

export default MyRouter;