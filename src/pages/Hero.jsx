import "./Hero.css"
import picture from "../assets/kl.png"
import { useEffect } from "react";

function Hero (){

    

    return(
        <>
        <div className="main-container"> 
            <div className="left-div">
            <h1>Hi 👋</h1>
             <h2>My name is <br /> <span>Sharafa Wale Mustapha,</span>  <br />I’m a front-end developer </h2>
            
            </div>
            <div className="right-div">
                <img src={picture} alt="" />
            </div>
        </div>
 
        </>
    );
}


export default Hero