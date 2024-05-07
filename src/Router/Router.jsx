import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home_page/Home/Home";
import SignIn from "../LogIn_Method/SignIn/SignIn";
import Sing_up from "../LogIn_Method/Sing_up/Sing_up";
import ProductDetails from "../Products/ProductDetails/ProductDetails";
import Wish_List from "../Wish_List/Wish_List";
import Cheack_Out from "../Cheack_Out/Cheack_Out";
import Shop from "../Shop_page/Shop/Shop";
import Contact_page from "../Contact_page/Contact_page";
import Blogs from "../Blogs_page/Blogs/Blogs";
import Single_blog from "../Blogs_page/Single_blog/Single_blog";
import About_page from "../About_page/About_page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/products/:id",
        element:<ProductDetails></ProductDetails>
      },
      {
        path:"/shop",
        element:<Shop></Shop>
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>
      },
      {
        path:"/blog/:id",
        element:<Single_blog></Single_blog>
      },
      {
        path:"/about",
        element:<About_page></About_page>
      },
      {
        path:"/contact",
        element:<Contact_page></Contact_page>
      },
      {
        path: "/wishList",
        element:<Wish_List></Wish_List>
      },
      {
        path: "/checkout",
        element:<Cheack_Out></Cheack_Out>
      },

    ]
  },

  {
    path: "/sign_In",
    element: <SignIn></SignIn>
  },
  {
    path: "/sign_Up",
    element: <Sing_up></Sing_up>
  }
]);