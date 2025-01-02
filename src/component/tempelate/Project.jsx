import React from 'react'
import {Link} from 'react-router-dom'
import ProjectCSS from '../css/Project.module.css'
import image1 from '../images/poster1.jpeg'
import image2 from '../images/poster2.jpeg'
import image3 from '../images/poster4.jpeg'
import image4 from '../images/trainingimg.jpeg'
import image5 from '../images/second.jpeg'

const Project = () => {
    return (
        <div className={ProjectCSS.body}>
            <p className={ProjectCSS.para}>#Creative and impressive projects</p>
              <h1 className={ProjectCSS.heading}>Our Featured Projects</h1>
            <div className={ProjectCSS.cardcontainer}>

                <div className={ProjectCSS.card}>
                    <img className={ProjectCSS.img} src={image1} alt="Product 1" />
                    <h3 className={ProjectCSS.h3}>Ultron</h3>
                    <p className={ProjectCSS.p}>This Project is based on IOT based Application </p>
                    <button className={ProjectCSS.btn}>Redirect Now</button>
                </div>

                <div className={ProjectCSS.card}>
                    <img className={ProjectCSS.img} src={image2} alt="Product 2" />
                    <h3 className={ProjectCSS.h3}>Medoc</h3>
                    <p className={ProjectCSS.p}>This project based on Web Application </p>
                    <button className={ProjectCSS.btn}>Redirect Now</button>
                </div>

                <div className={ProjectCSS.card}>
                    <img className={ProjectCSS.img} src={image3} alt="Product 3" />
                    <h3 className={ProjectCSS.h3}>Maxton.X</h3>
                    <p className={ProjectCSS.p}>This project based on Game development </p>
                    <button className={ProjectCSS.btn}>Redirect  Now</button>
                </div>
                <div className={ProjectCSS.card}>
                    <img className={ProjectCSS.img} src={image4} alt="Product 3" />
                    <h3 className={ProjectCSS.h3}>Holomad</h3>
                    <p className={ProjectCSS.p}>This project based on Full Stack Application </p>
                    <button className={ProjectCSS.btn}>Redirect Now</button>
                </div>
                <div className={ProjectCSS.card}>
                    <img className={ProjectCSS.img} src={image5} alt="Product 3" />
                    <h3 className={ProjectCSS.h3}>Mellow</h3>
                    <p className={ProjectCSS.p}>This project based on Front-end Only</p>
                    <button className={ProjectCSS.btn}>Redirect Now</button>
                </div>
              
            </div>
            <button className={ProjectCSS.more}><Link   to='/project'>More Projects</Link></button>
        </div>
    )
}

export default Project
