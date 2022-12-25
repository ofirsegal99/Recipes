import React, {useState , useEffect} from "react";
import NavBar from "../components/navBar";
import axios, * as others from 'axios';
function RecipesPage(){
    let [currentRecipes, setcurrentRecipes] = useState([]);
    let searchTargetWithoutSpace = "";
    let searchTarget = (window.location.href).substring(30);
    for(let i=0;i<searchTarget.length;i++){
        if(searchTarget[i]==='%'){
            i=i+2;
            searchTargetWithoutSpace=searchTargetWithoutSpace+" ";
        }
        else{
            searchTargetWithoutSpace= searchTargetWithoutSpace + searchTarget[i];
        }
     }
     let spoonacularSearchURL;
    if((searchTargetWithoutSpace.substring(0,10))==="MealTypeIs"){
      const API_Free_Search_Url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=2e401702f4ac4ad4b750d8f756aeffef&type=';
      spoonacularSearchURL = API_Free_Search_Url + searchTargetWithoutSpace.substring(10);
    }
    // console.log(searchTargetWithoutSpace)
    else{
      const API_Free_Search_Url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=2e401702f4ac4ad4b750d8f756aeffef&query=';
      spoonacularSearchURL = API_Free_Search_Url+searchTargetWithoutSpace;
    }
    useEffect(() => {
        axios.get(spoonacularSearchURL)
        .then(function (response) {
          // handle success
          setcurrentRecipes(response.data.results);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },[spoonacularSearchURL])
    console.log(spoonacularSearchURL);

    return(
        <>
        <NavBar/>
        <div className="resultsAndSearchmenuContainer">
            <div className="resultsContainer">
                    {currentRecipes.map((curr)=>(
                           <article key={curr.id} class="card">
                               <header class="card__thumb">
                                   <img src={curr.image} alt={curr.title}/>
                               </header>
                               <div class="card__body">
                                   <h2 class="card__title">{curr.title}</h2>
                                   <a href="/" class="card__description getRecipeButton">Get recipe</a>
                               </div>
                           </article>
                     ))}
            </div>
            <div className="searchmenuContainer">

            </div>
        </div>
        </>
    )
}

export default RecipesPage;
