import React from "react";
import { Link } from "react-router-dom";
import RecipesIcon from "../assets/RecipeIcon.png";
function returnHomeLogo(){
    return(
        <div className="returnLogoDivContainer">
        <div className="returnLogoContainer">
        <Link className="navBarUlElement" to="/">
             <img className="navBarIconImage" src={RecipesIcon} alt="NavBarIcon" />
             <h1 className="navBarIconTitle">Recipes</h1>
         </Link>
        </div>
    </div>       
    )
}

export default returnHomeLogo;