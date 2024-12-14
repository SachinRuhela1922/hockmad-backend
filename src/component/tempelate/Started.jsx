import React from 'react'
import StartCSS from '../css/Started.module.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Image from '../images/start.jpeg'

const Started = () => {
    return (
        <div className={StartCSS.body}>
            <Navbar />

            <div className={StartCSS.land}>
                <div className={StartCSS.content}>
                    <h1>hello</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia, eos odio nam reiciendis, a inventore eligendi possimus officiis, harum illo quae ex praesentium ut similique soluta quisquam alias sit.</p>

                </div>
                <div className={StartCSS.image}>
                    <img src={Image} className={StartCSS.image1} alt="" />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Started
