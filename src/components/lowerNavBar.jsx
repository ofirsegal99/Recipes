import React from "react";
import { Link } from "react-router-dom";
import DownArrow from '../assets/downArrow.png'
import allMealTypes from '../data/allMealTypes'
function lowerNavBar(){
    return(
        <div className="navRow">
            <ul className="navBarUl">
                {allMealTypes.map((curr,i)=>(
                     <li key={i} className="navBarLi">
                         <Link className="navBarMealTypesLink" to="/">
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