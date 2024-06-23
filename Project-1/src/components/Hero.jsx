import React from "react";
import Shoe from "./Shoe";
function Hero(){
    return(
        <div className="maindiv">
            <div className="contentdiv">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="herobutton">
                    <button className="button1">Shop Now</button>
                    <button className="button2">Category</button>
                </div>
                <div className="available">
                    <p>Also Available On</p>
                    <img src="./images/shops.png" alt="shops"  />
                </div>
            </div>
            <Shoe/>
        </div>
    )
}

export default Hero;