import React from 'react'
import FooterCSS from '../css/Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={FooterCSS.body}>
            <div className={FooterCSS.content}>
                At YourCompanyName, we are dedicated to providing exceptional services in web development, training, and skill enhancement. 
            </div>
            <div className={FooterCSS.links}>
           <h1 className={FooterCSS.head}>Useful Links</h1>
             <Link className={FooterCSS.link} to=""><i class='bx bxs-square'></i> Project</Link>
                <Link className={FooterCSS.link} to=""> <i class='bx bxs-square'></i> Training</Link>
                <Link className={FooterCSS.link} to=""><i class='bx bxs-square'></i> Career</Link>
                <Link  className={FooterCSS.link} to=""> <i class='bx bxs-square'></i> Blog</Link>
            </div>
            <div className={FooterCSS.contact}>
                <h1 className={FooterCSS.head}>Contact Us</h1>
                <h3><i class='bx bx-current-location' ></i>  Ghazibad, India</h3>
                <h3><i class='bx bxs-phone' ></i>  +91 8475843925</h3>
                <h3><i class='bx bx-envelope' ></i>  hockmad1922@gmail.com</h3>

            </div>
            <div className={FooterCSS.inputs}>
                <h1 className={FooterCSS.head}>Newsletter</h1>
                <p className={FooterCSS.register}>Register Here ...</p>
                <input className={FooterCSS.input} type="text" name="" id=""  placeholder='Enter your E-mail'/>
                <button className={FooterCSS.btn}><i class='bx bx-send' ></i></button>
            </div>
        </div>
    )
}

export default Footer
