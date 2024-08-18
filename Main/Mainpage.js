import React from "react";
import './Mainpage.css';


function Mainpage () {

    return (
       <>
     <div className="card">
    <div className="sub-topic">
    <h2>Weekly Arrivals</h2>
    <h4>Get them at a cheaper price below:</h4>
    </div>
    </div>
     
    <div className="gridContainer">
        <img className="picCard1" src="./ImageBin/pic1.jpg" alt=""/>
    <img className="picCard"  src="./ImageBin/pic2.jpg" alt=""/>
<img className="picCard"  src="./ImageBin/pic3.jpg" alt=""/>
    <img className="picCard4" src="./ImageBin/pic4.jpg" alt=""/>
    <img className="picCard" src="./ImageBin/pic5.jpg" alt=""/>
    <img className="picCard" src="./ImageBin/pic6.jpg" alt=""/>
    <img className="picCard7" src="./ImageBin/pic7.jpg" alt=""/>
    <img className="picCard" src="./ImageBin/pic8.jpg" alt=""/>
    </div>
        </>
    );
}

export default Mainpage;

