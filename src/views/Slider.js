import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './slider.css'

const Slider = () => {
  return (
    <div className='slider'>
        <Carousel infiniteLoop={true}>
            <div className='img-container'>
                <img src='slider_img/slider1.jpg'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider2.jpg'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider3.jpg'/>
            </div>
        </Carousel>
    </div>
  )
}

export default Slider