import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './slider.css'

const Slider = () => {
  return (
    <div className='slider'>
        <Carousel interval={3000} infiniteLoop={true}>
            <div className='img-container'>
                <img src='slider_img/slider1.jpg'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider2.jpg'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider3.jpg'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider4.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider5.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider6.jpg'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider7.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider8.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider9.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider10.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider11.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider12.png'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider13.jpg'/>
            </div>
            <div className='img-container'>
                <img src='slider_img/slider14.jpg'/>
            </div>
        </Carousel>
    </div>
  )
}

export default Slider