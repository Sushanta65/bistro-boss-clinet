import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Menu from "../components/Menu/Menu";
import Order from "../pages/Order";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order',
                element: <Order></Order>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'signin',
                element: <SignIn></SignIn>
            }
        ]
    }
])