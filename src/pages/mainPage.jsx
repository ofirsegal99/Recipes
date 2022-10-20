import React from "react";
import NavBar from "../components/navBar";
import WelcomeSection from "../components/welcome";
import ChooseCuisines from "../components/chooseCuisines";
function MainPage(){
    return(
        <>
        <NavBar/>
        <WelcomeSection/>
        <ChooseCuisines/>
        </>
    )
}

export default MainPage;