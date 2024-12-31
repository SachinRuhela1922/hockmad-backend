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
                    <p>welcome to hockmad, click on Home page</p>

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
