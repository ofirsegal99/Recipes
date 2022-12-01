import React from "react";
import GoogleIcon from "../assets/GoogleIcon1.png"
function loginCard(){
    return(
        <div className="loginCardContainer">
            <div className="loginTitleContainer">
                <h1 className="loginTitle">Welcome back</h1>
            </div>
            <div className="loginSubTitleContainer">
                <h3 className="loginSubTitle">The faster you fill up. the faster you get a recipe</h3>
            </div>
            <form className="loginForm">
                <div className="titleWithInputContainer">
                <h1 className="formTitle formGap">
                    Email
                </h1>
                <input className="formInput" placeholder="Enter your email" type="email" name="email" />
                </div>
                <div className="titleWithInputContainer">
                <h1 className="formTitle formGap">
                    Password
                </h1>
                <input className="formInput" placeholder="Enter your password" type="password" name="password" />
                </div>
                <div className="checkBoxWithForgotPasswordContainer">
                    <div className="checkBoxContainer titleWithInputContainer">
                    <input className="rememberMeCheckBox" type="checkbox" id="rememberMe" name="rememberMe"/>
                    <button className="rememberMeButton"><span className="rememberMeText">Remember me</span></button>
                    </div>
                    <div className="forgotPasswordContainer titleWithInputContainer">
                    <button className="rememberMeButton"><span className="rememberMeText">Forgot password</span></button>
                    </div>
                </div>
                <input className="loginButton" type="submit" value="Sign in" />
                <button className="loginButton loginGoogleButton" >
                    <img className="googleIcon" src={GoogleIcon} alt="GoogleIcon" />
                    <span className="googleLogInText">Sign In with Google</span>
                </button>
            </form>
        </div>
    )
}

export default loginCard;