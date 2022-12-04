import React from "react";
import RecipesIcon from "../assets/RecipeIcon.png";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import UserIcon from '../assets/UserIcon.png';
import axios, * as others from 'axios';
function upperNavBar(){
    
    const API_Free_Search_Url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=2e401702f4ac4ad4b750d8f756aeffef&query=';
    let currentText;
    let currentRecipes;
    let currentRecipe;
    let recipesGathered=(<div className="resultsContainer"></div>);
    function getRecipes(event){
        let recipeURL = API_Free_Search_Url+currentText;
        console.log(recipeURL);
        axios.get(recipeURL)
             .then(function (response) {
               // handle success
               currentRecipes = response.data.results;
               console.log(currentRecipes);
               (currentRecipes.map((curr)=>(
                    currentRecipe=(<div key={curr.id} className="recipeCardContainer">
                         <div className="recipeCard">
                             <img className="recipeCardImage" src={curr.image} alt={curr.title} />
                             <h1 className="recipeCardTitle">{curr.title}</h1>
                             <button className="recipeCardButton">Full recipe</button>
                         </div>
                     </div>)
               )=>{recipesGathered.appendChild(currentRecipe)}));
               console.log(recipesGathered)
             })
             .catch(function (error) {
               // handle error
               console.log(error);
             })
             .then(function () {
               // always executed
             });
    }
    function handleChange(event){
        currentText=event.target.value;
        console.log(currentText)
    }
    return(
        <div className="navRow">
            <ul className="navBarUl">
                <li className="navBarUlElement navBarLi">
                    <Link className="navBarUlElement" to="/">
                         <img className="navBarIconImage" src={RecipesIcon} alt="NavBarIcon" />
                         <h1 className="navBarIconTitle">Recipes</h1>
                    </Link>
                </li>
                <li  className="navBarUlElement navBarLi navBarLiSearch">
                     <Box
                         sx={{
                             maxWidth: '100%',
                             }}
                     >
                         <TextField
                          fullWidth label="Search for recipe"
                          id="fullWidth"
                          InputProps={{
                            style: { color: "#B1B2FF", fontSize:16 },
                            endAdornment: (
                              <InputAdornment>
                                <IconButton onClick={getRecipes}>
                                  <SearchIcon/>
                                </IconButton>
                              </InputAdornment>
                            )
                          }}
                          onChange={handleChange}/>
                     </Box>                    
                </li>
                <li className="navBarUlElement navBarLi">
                    <Link  className="navBarUlElement" to="/Login">
                        <img className="navBarUserIcon" src={UserIcon} alt="userIcon"/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default upperNavBar;