import React from "react";
import UpperNavBar from "./upperNavBar";
import LowerNavBar from "./lowerNavBar";

function navBar(){
    return(
        <div className="navBarContainer">
            <UpperNavBar/>
            {/* <hr className="navBarHorizontalLine" /> */}
            <div className="navBarHorizontalLine"></div>
            <LowerNavBar/>
        </div>
    )
}

export default navBar;