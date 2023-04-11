import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import energym from '../Images/EnergymLogo.webp'
import master from '../Images/master2.png'
import oana from '../Images/oana.png'
import './sponsori.css'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const SponsorsSlide = () => {
    return (
        <div className="sponsor-container">
            <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={5000} infinite={true} partialVisbile={false} >
                    <div className="sponsor"><img src={energym} alt="Energim logo" style={{height:'75px'}}/></div>
                    <div className="sponsor "><img src={master} alt="Energim logo" style={{height:'150px'}}/></div>
                    <div className="sponsor "><img src={oana} style={{ height: '260px' }} alt="Energim logo"  /></div>
                    <div className="sponsor">cacat</div>
                    <div className="sponsor">plm</div>
            </Carousel>
        </div>
    );
}

export default SponsorsSlide;