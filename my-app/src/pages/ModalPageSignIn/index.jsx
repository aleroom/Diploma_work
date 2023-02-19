import React from "react";
import Login from "../../components/SignIn";
import style from "./modalSignIn.module.css";

function ModalSignIn({active, setActive}) {
    return(
        <div className={active ? style.modal.active : style.modal} onClick={() => setActive(false)}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                <Login/>
            </div>
            
        </div>
    )
}

export default ModalSignIn;