import React from 'react'
import LandCSS from '../css/Land.module.css';
import { Link } from 'react-router-dom';
import Image1 from '../images/posterman.jpeg';

const Land = () => {
    return (
        <div className={LandCSS.body}>
            <div className={LandCSS.zigzagcontainer}>
                <div className={LandCSS.zigzag}></div>
            </div>
            <div className={LandCSS.middlepart}>
                <span className={LandCSS.middleslogan}># Don't be mad Be Hockmad!</span>
                <div>
                    <h2 className={LandCSS.middlecontenth2}>Real-World Projects<br />Expert Training <br /> - Hockmad Delivers!</h2>
                </div>
                <p className={LandCSS.middlep}> "By partnering with Hockmad, you gain access to real-world projects and expert training, helping you build practical skills while working on cutting-edge solutions.</p>
                <div className={LandCSS.button}>
                    <button className={LandCSS.btn1}><Link className={LandCSS.btn1link} to="/contact">Get Started</Link></button>
                    <button className={LandCSS.btn2}><Link className={LandCSS.btn2link} to="/">Projects</Link></button>
                </div>
            </div>
            <div className={LandCSS.banner1}>
                <img className={LandCSS.bannerimg1} src={Image1} alt="" />
            </div>
           
         
           

        </div>
    )
}

export default Land
