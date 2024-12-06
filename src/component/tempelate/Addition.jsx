import React from 'react'
import AddCSS from '../css/AdditionCSS.module.css'
import image2 from '../images/add1.jpeg'
import image3 from '../images/add2.jpeg'
import image4 from '../images/add3.jpeg'
import image1 from '../images/add4.jpeg'
const Addition = () => {
    return (


        <div className={AddCSS.body}>
            <div className={AddCSS.content}>
                <p className={AddCSS.head}>Why we?</p>
                <h1 className={AddCSS.slogan}>Innovate, Train and Succeed</h1>
                <p className={AddCSS.describe}>we innovate by developing cutting-edge solutions, train individuals with hands-on, real-world skills, and empower them to succeed in their careers and personal growth. Together, we shape the future through skill development and innovation-driven learning experiences.</p>
                <button className={AddCSS.btn}>Explore Now </button>
            </div>
            <div className={AddCSS.Addcard}>
            
            <div class={AddCSS.cardcontainer}>
                <div class={AddCSS.card}>
                    <img className={AddCSS.img} src={image1} alt="Profile 1" />
                    <div class={AddCSS.cardcontent}>
                        <h3 className={AddCSS.h3}>Explore</h3>
                        <p className={AddCSS.p}>diverse projects and ideas...</p>
                    </div>
                </div>

                <div class={AddCSS.card}>
                    <img className={AddCSS.img} src={image2} alt="Profile 2" />
                    <div class={AddCSS.cardcontent}>
                        <h3 className={AddCSS.h3}>Learn</h3>
                        <p className={AddCSS.p}> valuable skills with hands-on experience...</p>
                    </div>
                </div>

                <div class={AddCSS.card}>
                    <img className={AddCSS.img} src={image3} alt="Profile 3" />
                    <div class={AddCSS.cardcontent}>
                        <h3 className={AddCSS.h3}>Grow</h3>
                        <p className={AddCSS.p}> your expertise through real-world training...</p>
                    </div>
                </div>

                <div class={AddCSS.card}>
                    <img className={AddCSS.img} src={image4} alt="Profile 4" />
                    <div class={AddCSS.cardcontent}>
                        <h3 className={AddCSS.h3}>Achieve</h3>
                        <p className={AddCSS.p}> your career goals with confidence...</p>
                    </div>
                </div>
            </div>

        </div>
        </div>
    
    )
}

export default Addition
