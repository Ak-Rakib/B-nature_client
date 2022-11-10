import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from '../Authentication/Register/Register'
import Blog from "../Pages/Blog/Blog";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import CustomerReviewPage from "../Pages/Home/CustomerReviewPage/CustomerReviewPage";
import ReviewPage from "../Pages/ReviewPage/ReviewPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyReviews from "../Pages/MyReviews/MyReviews";
import AddPost from "../Pages/Home/AddPost/AddPost";

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
                loader: () => fetch('https://b-nature-server-ak-rakib.vercel.app/review')
            },

            {
                path: '/review/:id',
                element: <CustomerReviewPage></CustomerReviewPage>,
                loader: ({params}) => fetch(`https://b-nature-server-ak-rakib.vercel.app/review/${params.id}`)
            },

            {
                path: '/reviewPage/:id',
                element: <PrivateRoute><ReviewPage></ReviewPage></PrivateRoute>,
                loader: ({params}) => fetch(`https://b-nature-server-ak-rakib.vercel.app/review/${params.id}`)
            },
            {
                path: '/myReviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addPost',
                element: <PrivateRoute> <AddPost></AddPost> </PrivateRoute>
            }
        ]
    }
])

export default router;