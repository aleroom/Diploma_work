import React from "react";
import Login from "../../components/SignIn";
import style from "./modalSignIn.module.css";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setModal} from "../../appSlices";


const ModalSignIn:React.FC =() => {
    const dispatch = useAppDispatch()
    const modal = useAppSelector(state => state.rootReducer.postsReducer.modalActive)
    return(
        <div className={modal ? `${style.modal} ${style.active}` : `${style.modal}`} onClick={() => dispatch(setModal())}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                <Login/>
            </div>

        </div>
    )
}

export default ModalSignIn;