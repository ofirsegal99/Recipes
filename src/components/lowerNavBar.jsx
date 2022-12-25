import React from "react";
import { Link } from "react-router-dom";
import DownArrow from '../assets/downArrow.png'
import allMealTypes from '../data/allMealTypes'
function lowerNavBar(){
    function whichMealType(event){
        // console.log(event.target.innerHTML);
        let currentMealType=event.target.innerHTML;
        let searchURL = "http://localhost:3000/Recipes/MealTypeIs" + currentMealType;
        window.location.href = searchURL;
    }
    return(
        <div className="navRow">
            <ul className="navBarUl">
                {allMealTypes.map((curr,i)=>(
                     <li key={i} className="navBarLi">
                         <Link className="navBarMealTypesLink" onClick={whichMealType} to="/">
                             <span className="navBarMealTypesText">{curr.nameOfType}</span>
                         </Link>
                     </li>     
                ))}
            </ul>
            <div className="navRow navRowForButton">
                <button className="navBarMealTypesButton">
                    <img className="navBarMealTypesDownArrow" src={DownArrow} alt="downArrow" />
                </button>
            </div>
        </div>
    )
}

export default lowerNavBar;