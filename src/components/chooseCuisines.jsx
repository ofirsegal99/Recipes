import React from 'react';
import Card from "./cardCuisine"
import CuisineArrow from "../assets/CuisineArrow.png"
function ChooseCuisines(){
    function GetWindowSize(){
        var width = window.innerWidth
              || document.documentElement.clientWidth
              || document.body.clientWidth;
        console.log(width)  
    }
    return(
        <div className='chooseCuisinesContainer '>
            <div className='overallContainer chooseCuisinesCardAndTitleContainer'>
                <h1 className='chooseCuisinesTitle'>Pick by cuisine</h1>
                <div className='chooseCuisinesCardSliderContainer'>
                    <button onClick={GetWindowSize} className='cuisineArrowButton'>
                        <img className='cuisineArrowButtonImage  cuisineLeftArrowButtonImage' src={CuisineArrow} alt="CuisineArrow" />
                    </button>
                    <div className='chooseCuisinesCardSlider'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    </div>
                    <button onClick={GetWindowSize} className='cuisineArrowButton'>
                        <img className='cuisineArrowButtonImage' src={CuisineArrow} alt="CuisineArrow" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChooseCuisines;