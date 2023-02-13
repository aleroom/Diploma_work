import React from "react";
import style from '../../App.css'
import BlogMenu from "../BlogMenu";
import Header from "../Header";
import Footer from "../Footer";

function Layout( {children} ) {
    return(
        <>
            <Header />
            <BlogMenu/>
            {children} 
            <Footer/> 
        </>
   )      
}

export default Layout;