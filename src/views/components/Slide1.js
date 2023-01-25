import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

const Slide1 = () => {
  return (
    <div className='img-container'>
    <img className='img1' src='slider_img/1slider.jpg'/>
    <img className='img2' src='slider_img/1slider2.jpg'/>
    <ReactAudioPlayer
    src="/audio/1.mp3"
    autoPlay
    controls={false}
    />
</div>
  )
}

export default Slide1