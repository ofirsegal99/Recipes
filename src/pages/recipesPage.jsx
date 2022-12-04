import React from "react";
import NavBar from "../components/navBar";

function recipesPage(){
    return(
        <>
        <NavBar/>
        <div className="resultsAndSearchmenuContainer">
            <div className="resultsContainer">
                 <div className="recipeCardContainer">
                    <div className="recipeCard">
                        <img className="recipeCardImage" src="https://spoonacular.com/recipeImages/654857-312x231.jpg" alt="Pasta On The Border" />
                        <h1 className="recipeCardTitle">Pasta On The Border</h1>
                        <button className="recipeCardButton">Full recipe</button>
                    </div>
                 </div>
            </div>
            <div className="searchmenuContainer">

            </div>
        </div>
        </>
    )
}

export default recipesPage;