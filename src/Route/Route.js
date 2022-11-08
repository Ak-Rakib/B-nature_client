import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from '../Authentication/Register/Register'

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
            }
        ]
    }
])

export default router;