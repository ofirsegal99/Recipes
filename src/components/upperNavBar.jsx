import React from "react";
import RecipesIcon from "../assets/RecipeIcon.png";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function upperNavBar(){
    return(
        <div className="navRow">
            <ul className="navBarUl">
                <li className="navBarUlElement navBarLi">
                    <Link className="navBarUlElement" to="/">
                         <img className="navBarIconImage" src={RecipesIcon} alt="NavBarIcon" />
                         <h1 className="navBarIconTitle">Recipes</h1>
                    </Link>
                </li>
                <li  className="navBarUlElement navBarLi">
                     <Box
                         sx={{
                             width: 500,
                             maxWidth: '100%',
                             }}
                     >
                         <TextField
                          fullWidth label="Search for recipe"
                          id="fullWidth"
                         />
                     </Box>                    
                </li>
                <li>
                </li>
            </ul>
        </div>
    )
}

export default upperNavBar;