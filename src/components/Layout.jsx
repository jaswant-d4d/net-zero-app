import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";


const Layout = () => {
    const [bgTransparent, setBgTransparent] = useState(false);
    const location = useLocation();
    const pathname = location.pathname.substring(1);
    useEffect(() => {
        const bgTransparentType = location.pathname === "/" ? true : false
        setBgTransparent(bgTransparentType)
    }, [])

    return (
        <div className={"bg-" + pathname}>
            <Header bgTransparent={bgTransparent} />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout