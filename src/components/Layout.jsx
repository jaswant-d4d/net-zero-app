import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";


const Layout = () => {
    const [bgTransparent, setBgTransparent] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const bgTransparentType = location.pathname === "/" ? true : false
        setBgTransparent(bgTransparentType)
    }, [])

    return (
        <>
            <Header bgTransparent={bgTransparent} />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout