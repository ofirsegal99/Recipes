import React from "react";
import Food from "../assets/food.png";
import Food2 from "../assets/food2.png";
import { Link } from "react-router-dom";
function Welcome(){
    return(
        <div className="overallContainer">
            <div className="welcomeLeftContainer">
                <h1 className="welcomeTitle welcomeAllTitles">Search, Cook, Eat & Enjoy</h1>
                <br />
                <h2 className="welcomeSubTitle welcomeAllTitles">All the recipes in one place.</h2>
                {/* <button className="welcomeButton welcomeLoginButton">Login</button> */}
                <Link className="welcomeButton welcomeLoginButton"  to="/Login">Login</Link>
                <button className="welcomeButton welcomeSignupButton">Dont have an account? Click here to sign up</button>
            </div>
             <img className="foodImage firstFood" src={Food} alt="food" />
             <img className="foodImage secondFood" src={Food2} alt="food" />
        </div>
    )
}

export default Welcome;