import style from "./Footer.module.css";

const Footer = ({year}) => {
    return (
       <footer className={style.footer}>
            <span>MyBlog - {year}</span>
       </footer>
    )
   }

   export default Footer;