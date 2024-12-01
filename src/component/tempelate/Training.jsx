import React from 'react'
import TrainCSS from '../css/Training.module.css'
import html from '../images/html.jpeg'
import js from '../images/js.jpeg'
import react from '../images/react.jpeg'

const Training = () => {
    return (
        <div className={TrainCSS.body}>
            <p className={TrainCSS.slogan}>#Empowering Minds, Shaping Futures</p>
             <h1 className={TrainCSS.heading}>Our Amazing Cards</h1>
             <p className={TrainCSS.describe}>Learn how to build dynamic, responsive websites and web applications with hands-on projects and real-world examples.</p>

            <div className={TrainCSS.cardcontainer}>
                <div class={TrainCSS.card}>
                    <img className={TrainCSS.img1} src={html} alt="" />
                    <h3 className={TrainCSS.h3}>HTML+CSS</h3>
                    <p className={TrainCSS.p}>Learn to create structured, stylish, and responsive websites with HTML and CSS.</p>
                    <button className={TrainCSS.btn}>Redirect</button>
                </div>
                <div className={TrainCSS.card}>
                <img className={TrainCSS.img2} src={js} alt="" />
                    <h3 className={TrainCSS.h3}>JavaScript</h3>
                    <p className={TrainCSS.p}>Master JavaScript to add interactivity and dynamic functionality to web pages.</p>
                    <button className={TrainCSS.btn}>Redirect</button>
                </div>
                <div className={TrainCSS.card}>
                <img className={TrainCSS.img3} src={react} alt="" />
                    <h3 className={TrainCSS.h3}>ReactJS</h3>
                    <p className={TrainCSS.p}>Build fast web apps with React, focusing on components and state management.</p>
                    <button className={TrainCSS.btn}>Redirect</button>
                </div>
            </div>
        </div>
    )
}

export default Training
