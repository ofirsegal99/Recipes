import React from "react";

function signinOrSignup(){
    return(
        <div className="signinOrSignupContainer">
            <span className="signinOrSignupFirstSpan">Don't have an account ? 
                <button className="signinOrSignupButton">
                    <span className="signinOrSignupSecondSpan">Sign Up</span>
                </button>
            </span>
        </div>
    )
}
export default signinOrSignup;