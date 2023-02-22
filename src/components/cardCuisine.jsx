import React from "react";
import Dinner from "../assets/Dinner.png"

function cardCuisine(nameOfCuisine){
    function getRecipesByCuisine(e){
        let getTitleName = e.target;
        while((getTitleName.className)!=="cardCuisineTitleContainer"){
            getTitleName = getTitleName.parentNode;
        }
        getTitleName=getTitleName.firstChild.nextSibling.innerText;

        let searchURL = "http://localhost:3000/Recipes/CuisineTypeIs" + getTitleName;
        console.log(searchURL)
        window.location.href = searchURL;
    }
    return(
        <div className='cardContainer'>
             <button className='cardCuisineButton' onClick={getRecipesByCuisine}>
                  <div className='cardCuisineTitleContainer'>
                      <div className='cardCuisineCircle'><img className='cardCuisineDinnerIcon' src={Dinner} alt="dinnerIcon" /></div>
                      <h1 className='cardCuisineTitle'>{nameOfCuisine.nameOfCuisine.nameOfCuisine}</h1>
                  </div>
             </button>
        </div>
    )
}

export default cardCuisine;