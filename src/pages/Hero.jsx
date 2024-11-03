import "./Hero.css"
import picture from "../assets/kl.png"
import { useEffect } from "react";

function Hero (){

    

    return(
        <>
        <div className="main-container"> 
            <div className="left-div">
            <h2>Hello 👋</h2>
             <h2>I'm  <span> Wale ,</span> a Passionate <br /> Front-end Developer </h2>
            
            </div>
            <div className="right-div">
                <img src={picture} alt="" />
            </div>
        </div>
 
        </>
    );
}


export default Hero