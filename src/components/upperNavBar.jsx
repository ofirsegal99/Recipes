import React from "react";
import RecipesIcon from "../assets/RecipeIcon.png";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import UserIcon from '../assets/UserIcon.png';


function upperNavBar(){
    let currentText;
    function getRecipes(event){
        let searchURL = "http://localhost:3000/Recipes/" + currentText;
        window.location.href = searchURL;
    }
    function handleChange(event){
        currentText=event.target.value;
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

