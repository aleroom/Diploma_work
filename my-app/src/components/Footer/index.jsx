import style from "./Footer.module.css";
import React from 'react'

const Footer = ({year}) => {
    return (
       <footer className={style.footer}>
            <span>MyBlog - {new Date().getFullYear()}</span>
       </footer>
    )
   }

   export default Footer;