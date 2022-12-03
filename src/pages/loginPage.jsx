import React from "react";
import ReturnHomeLogo from "../components/returnHomeLogo";
import LoginCard from "../components/loginCard";
import SigninOrSignup from "../components/signinOrSignup";
import Background from '../assets/FoodBackground.jpg'
function loginPage(){
    return(
        <>
        <div className="greyBackgroundContainer">
            <div className="bothContainer">
                <div className="halfContainer loginContainer">
                    <ReturnHomeLogo/>
                    <LoginCard/>
                    <SigninOrSignup/>
                </div>
                <div className="halfContainer pictureContainer">
                    <img className="signinBackgroundImage" src={Background} alt="SignInBackground" />
                </div>
            </div>
        </div>
        </>
    )
}
export default loginPage;