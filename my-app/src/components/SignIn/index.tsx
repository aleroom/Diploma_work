import style from "./signIn.module.css";
import React, {useEffect, useState} from "react";
import {login, isLogin} from "../../appSlices/user.slice";
import {useAppSelector, useAppDispatch} from "../../store/hooks";
import {useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
    email: string,
    password: string,
};

function Login() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(login(data))
    };

    const tokenStatus = useAppSelector(
        (state) => state?.rootReducer?.userReducer?.accessToken
    );

    const dispatch = useAppDispatch();


    const handleIsLogin = () => {
        dispatch(isLogin(tokenStatus));

    };


    useEffect(() => {
        if (tokenStatus) {
            handleIsLogin()
        }
        return () => {
        }
    }, [tokenStatus])


    return (
        <div className={style.signInContainer}>
            <h2 className={style.signInDescr}>Welcome to MYBLOG</h2>
            <div className={style.signInWrap}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type={"email"}
                        placeholder={"Email"}
                        {...register('email', {
                            required: true, pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })}
                    />

                    <input
                        type={"password"}
                        placeholder={"Password"}
                        {...register('password', {required: true})}
                    />
                    <div className={style.signInSubmit}>
                        <button type="submit">Sumbit</button>
                    </div>
                    <br/>
                </form>
            </div>
        </div>
    )
}

export default Login;