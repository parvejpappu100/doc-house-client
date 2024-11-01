import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import DoctorProfile from "../pages/DoctorProfile/DoctorProfile";
import Services from "../pages/Services/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: < Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "singUp",
                element: <SingUp></SingUp>
            },
            {
                path: "doctor-profile/:id",
                element: <DoctorProfile></DoctorProfile>
            },
            {
                path: "services",
                element: <Services></Services>
            }
        ]
    }
]);


export default router;