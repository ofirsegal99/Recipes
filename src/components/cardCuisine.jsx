import React from "react";
import Dinner from "../assets/Dinner.png"

function cardCuisine(nameOfCuisine){
    return(
        <div className='cardContainer'>
             <button className='cardCuisineButton'>
                  <div className='cardCuisineTitleContainer'>
                      <div className='cardCuisineCircle'><img className='cardCuisineDinnerIcon' src={Dinner} alt="dinnerIcon" /></div>
                      <h1 className='cardCuisineTitle'>{nameOfCuisine.nameOfCuisine.nameOfCuisine}</h1>
                  </div>
             </button>
        </div>
    )
}

export default cardCuisine;