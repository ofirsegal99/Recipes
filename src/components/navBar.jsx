import React from "react";
import UpperNavBar from "./upperNavBar";
import LowerNavBar from "./lowerNavBar";

function navBar(){
    return(
        <div className="navBarContainer">
            <UpperNavBar/>
            <LowerNavBar/>
        </div>
    )
}

export default navBar;