import React from 'react'
import Image from '../images/land.jpeg';
import TrainCSS from '../css/Trainingimg.module.css'
import Image1 from '../images/poster1.jpeg'
import Image2 from '../images/second.jpeg'

const Trainingimg = () => {
  return (
    <div className={TrainCSS.body}>
      
      <img className={TrainCSS.img} src={Image} alt="" srcset="" />
      <div className={TrainCSS.images}>
        <img className={TrainCSS.image1} src={Image1} alt="" />
        <img className={TrainCSS.image2} src={Image2} alt="" />
      </div>
    </div>
  )
}

export default Trainingimg
