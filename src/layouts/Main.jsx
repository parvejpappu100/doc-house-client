import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';

const Main = () => {

    const location = useLocation();

    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("singUp");

    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <ScrollRestoration></ScrollRestoration>
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;