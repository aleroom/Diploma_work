import React from "react";
import BlogMenu from "../BlogMenu";
import Header from "../Header";
import Footer from "../Footer";

type LayoutProp = {
    children : React.ReactNode
}

const Layout:React.FC<LayoutProp> = ({children}) => {
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