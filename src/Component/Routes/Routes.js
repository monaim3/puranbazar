import { createBrowserRouter,  } from "react-router-dom";
import Login from "../Auth/Login/Login";
import PrivateRoute from "../Auth/PrivateRoute/PrivateRoute";
import Register from "../Auth/Register/Register";
import AddProduct from "../Layout/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../Layout/Dashboard/AllBuyer/AllBuyer";
import AllSellar from "../Layout/Dashboard/AllSellar/AllSellar";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import MyOrders from "../Layout/Dashboard/MyOrders/MyOrders";
import MyProduct from "../Layout/Dashboard/MyProduct/MyProduct";
import ReportItem from "../Layout/Dashboard/ReportItem/ReportItem";
import WishList from "../Layout/Dashboard/WishList/WishList";
import Main from "../Layout/Main/Main";
import AllCategory from "../Pages/AllCategory/AllCategory";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Erropage from "../SharedPage/Erropage/Erropage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Erropage></Erropage>,
      children:[
        {
            path: "/",
            element:<Home></Home>,
          },
            {
            path: "blog",
            element: <Blog></Blog>,
          },
          {
            path:"laptopDeatils/:category",
            element: <PrivateRoute><AllCategory></AllCategory></PrivateRoute>,
          
          },
          {
            path: "login",
            element: <Login></Login>,
          },
          {
            path: "register",
            element: <Register></Register>,
          },
  
      ]
    },
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    errorElement:<Erropage></Erropage>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/dashboard/addproduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/dashboard/myproduct',
        element:<MyProduct></MyProduct>
      },
      {
        path:'/dashboard/orders',
        element:<MyOrders></MyOrders>
      },
      {
        path:'/dashboard/wishlist',
        element:<WishList></WishList>
      },
      {
        path:'/dashboard/sellers',
        element:<AllSellar></AllSellar>
      },
      {
        path:'/dashboard/buyers',
        element:<AllBuyer></AllBuyer>
      },
      {
        path:'/dashboard/report',
        element:<ReportItem></ReportItem>
      },
    ]
  }
  ]);

  export default router;