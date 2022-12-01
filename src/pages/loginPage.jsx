import React from "react";
import ReturnHomeLogo from "../components/returnHomeLogo";
import LoginCard from "../components/loginCard";
import SigninOrSignup from "../components/signinOrSignup";
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

                </div>
            </div>
        </div>
        </>
    )
}
export default loginPage;