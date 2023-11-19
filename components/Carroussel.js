'use client';
import { useState } from 'react';
import 'w3-css/3/w3.css'

export default function Carroussel() {

    const [slideIndex, setSlideIndex] = useState(1);
    const length = 2;

    function plusDivs (n) {
        let index = slideIndex + n;
        if(index > length) { index = 1; }
        if(index < 1) { index = length; }
        setSlideIndex(index);
        console.log("slideIndex ",slideIndex )
    }

    return (
        <>
            <div className="w3-content w3-display-container" style={{ maxWidth: "1200" }}>
                <img className="mySlides" src="Home_Desk-frontline.jpg" style={{ width: "100%", display: slideIndex==1 ?'block' :'none' }} />
                <img className="mySlides" src="Home_Desk_Kaminha.jpg" style={{ width: "100%", display: slideIndex==2 ?'block' :'none' }} />

                <div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle img_carroussel">
                   <div className="w3-left w3-hover-text-khaki" onClick={() => plusDivs(-1) }>&#10094;</div>
                    <div className="w3-right w3-hover-text-khaki" onClick={() => plusDivs(1) }>&#10095;</div>
                    <span className="w3-badge demo w3-border w3-transparent w3-hover-white" ></span>
                    <span className="w3-badge demo w3-border w3-transparent w3-hover-white" ></span>
                </div>
            </div>
        </>


    )
}