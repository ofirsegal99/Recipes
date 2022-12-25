import React, { useEffect } from 'react';
import Card from "./cardCuisine"
import CuisineArrow from "../assets/CuisineArrow.png"
import AllCuisineTypes from '../data/allCuisinesTypes';
function ChooseCuisines(nameOfCuisine){
    function GetWindowSize(){
        let containerD=document.querySelector('.chooseCuisinesCardSliderContainer');
        let containerD_Overall_Width=containerD.offsetWidth;
        console.log("overall Container width is :"+containerD_Overall_Width);
        let containerC=document.querySelector('.cuisineArrowButton');
        let containerC_Width=containerC.offsetWidth;
        console.log("Button width without margin is :"+containerC_Width);
        let containerC_Style=containerC.currentStyle || window.getComputedStyle(containerC);
        let containerC_Margin=parseFloat(containerC_Style.marginLeft) + parseFloat(containerC_Style.marginRight);
        console.log("Button margin with is :"+containerC_Margin);
        let containerC_Overall_width=((containerC_Width+containerC_Margin)*2);
        console.log("Buttons Overall width is :"+containerC_Overall_width);
        let containerA=document.querySelector('.cardContainer');
        let containerA_Width=containerA.offsetWidth;
        console.log("Card width Without margin is :"+containerA_Width);
        let containerA_Style=containerA.currentStyle || window.getComputedStyle(containerA);
        let containerA_Margin=parseFloat(containerA_Style.marginLeft) + parseFloat(containerA_Style.marginRight);
        console.log("Card margin width is :"+containerA_Margin);
        let containerA_Overall_width=(containerA_Width+containerA_Margin);
        console.log("Card Overall width is :"+containerA_Overall_width);
        let overallCardsContainer=0;
        while(overallCardsContainer<(containerD_Overall_Width-containerC_Overall_width)){
            overallCardsContainer=overallCardsContainer+containerA_Overall_width;
        }
        overallCardsContainer=overallCardsContainer-containerA_Overall_width;
        console.log("the width for the overall card container need to be :"+overallCardsContainer);
        // document.getElementsById('chooseCuisinesCardSlider').style.width=overallCardsContainer;
        const box = document.getElementById('chooseCuisinesCardSlider');
        console.log(overallCardsContainer+'px')
        box.style.width =overallCardsContainer+'px';
    }
    useEffect(() => {
        GetWindowSize();
      }, []);
    window.onresize = GetWindowSize;

    return(
        <div className='chooseCuisinesContainer '>
            <div className='overallContainer chooseCuisinesCardAndTitleContainer'>
                <h1 className='chooseCuisinesTitle'>Pick by cuisine</h1>
                <div className='chooseCuisinesCardSliderContainer'>
                    <button className='cuisineArrowButton'>
                        <img className='cuisineArrowButtonImage  cuisineLeftArrowButtonImage' src={CuisineArrow} alt="CuisineArrow" />
                    </button>
                    <div className='chooseCuisinesCardSlider' id='chooseCuisinesCardSlider'>
                    {AllCuisineTypes.map((curr,i)=>(
                        <Card nameOfCuisine={curr} key={i}/>
                    ))}
                    </div>
                    <button className='cuisineArrowButton'>
                        <img className='cuisineArrowButtonImage' src={CuisineArrow} alt="CuisineArrow" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChooseCuisines;