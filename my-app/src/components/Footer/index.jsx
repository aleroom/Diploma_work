import style from "./Footer.module.css";

const Footer = ({year}) => {
    return (
       <footer className={style.footer}>
            <span>MyBlog - {new Date().getFullYear()}</span>
       </footer>
    )
   }

   export default Footer;