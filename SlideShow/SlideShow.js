import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import './SlideShow.css';


export const SlideShow = () => {

    return (
        <div className="sliderimages">
        <AliceCarousel autoPlay autoPlayInterval="3000">
             <div>
            <img src="https://4.bp.blogspot.com/-N22hzlemgdk/UGyqJHUoEwI/AAAAAAAAAKY/Vf2CSqCoaOI/s1600/Invicta+Men's+8928OB+Pro+Diver+Two-Tone+Automatic+Watch.jpg" alt="" className="slideimg"/>
             <h4 className="textmark">Luxury Watches</h4>
            </div> 
            <div>
            <img src="https://i.pinimg.com/originals/f0/b2/1b/f0b21bccca7d87736e6eb4a90d0c7ce9.jpg" alt="" className="slideimg"/>
             <h4 className="textmark">MakeUp mini boxes</h4>
            </div>
            <div>
            <img src="https://www.the-sun.com/wp-content/uploads/sites/6/2022/09/iphone-15-op.jpg?strip=all&quality=100&w=1920&h=1080&crop=1" alt="" className="slideimg"/>
            <h4 className="textmark">Smartphones</h4>
            </div>
            <div>
            <img src="https://cdnc.lystit.com/photos/301c-2016/02/09/coach-cognac-large-manhattan-backpack-in-pebble-leather-brown-product-1-780142633-normal.jpeg" alt="" className="slideimg"/>
            <h4 className="textmark">Backpack's</h4>
            </div>
        </AliceCarousel>
        </div>
    )
}