import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from '../Authentication/Register/Register'
import Blog from "../Pages/Blog/Blog";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/serviceDetails',
                element: <ServiceDetails></ServiceDetails>,
                loader: () => fetch('http://localhost:5000/review')
            }
        ]
    }
])

export default router;