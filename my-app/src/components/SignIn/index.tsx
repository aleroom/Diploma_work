import style from "./signIn.module.css";
import React, {useEffect, useState} from "react";
import { login, isLogin } from "../../appSlices/user.slice";
import {useAppSelector, useAppDispatch} from "../../store/hooks";

function Login() {
  const userStatus = useAppSelector((state) => state?.rootReducer?.userReducer?.user);
  
  const tokenStatus = useAppSelector(
    (state) => state?.rootReducer?.userReducer?.accessToken
  );
  const modalActive = useAppSelector(state => state.rootReducer.postsReducer.modalActive)

  const dispatch = useAppDispatch();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(login({email, password}))
  }

  const handleIsLogin = () => {
    dispatch(isLogin(tokenStatus));
  
  };



  useEffect(()=>{
    if(tokenStatus){
      handleIsLogin()
    }
    return () => {
   }
  }, [tokenStatus])


  return (
    <div className={style.signInContainer}>
      {/*<h3>{JSON.stringify(userStatus)}</h3>*/}
      <h2 className={style.signInDescr}>Welcome to MYBLOG</h2>
        <div className={style.signInWrap}>
          <form onSubmit = {handleLogin}>
              <input
                type={"email"}
                required
                placeholder={"Email"}
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
              />

              <input
                type={"password"}
                placeholder={"Password"}
                value={password}
                required
                onChange = {(e) => setPassword(e.target.value)}
              />
              <div className={style.signInSubmit}>
                <button type="submit">Sumbit</button>
              </div>
              <br />
        </form>
      </div>
  </div>
  )
}

export default Login;