import React from 'react';
import { Outlet } from "react-router-dom";
import { Footer } from '../pages/Footer';
import NavBar from '../pages/NavBar';

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;