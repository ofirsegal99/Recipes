import React from "react";

function Welcome(){
    return(
        <div className="overallContainer">
            <div className="welcomeLeftContainer">
                <h1 className="welcomeTitle welcomeAllTitles">Search, Cook, Eat & Enjoy</h1>
                <br />
                <h2 className="welcomeSubTitle welcomeAllTitles">All the recipes in one place.</h2>
                <button className="welcomeButton welcomeLoginButton">Login</button>
                <button className="welcomeButton welcomeSignupButton">Dont have an account? Click here to sign up</button>
            </div>
        </div>
    )
}

export default Welcome;