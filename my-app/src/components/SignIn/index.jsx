import React, {useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import { login, isLogin } from "../../appSlices/user.slice";

function Login() {
  const userStatus = useSelector((state) => state?.rootReducer?.userReducer?.user);
  
  const tokenStatus = useSelector(
    (state) => state?.rootReducer?.userReducer?.accessToken
  );

  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login({email, password}))
  }

  const handleIsLogin = (e) => {
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
    <>
      <h3>{JSON.stringify(userStatus)}</h3>
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
          
          <input type="submit" value="Submit" />
          <br />
    </form>
  </>
  )
}

export default Login;