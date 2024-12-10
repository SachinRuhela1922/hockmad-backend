import React from 'react'
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
              <h1 className={ProjectCSS.heading}>Our Featured Products</h1>
            <div className={ProjectCSS.cardcontainer}>

                <div className={ProjectCSS.card}>
                    <img className={ProjectCSS.img} src={image1} alt="Product 1" />
                    <h3 className={ProjectCSS.h3}>Product 1</h3>
                    <p className={ProjectCSS.p}>Some description for product 1.</p>
                    <button className={ProjectCSS.btn}>Buy Now</button>
                </div>

                <div className={ProjectCSS.card}>
                    <img className={ProjectCSS.img} src={image2} alt="Product 2" />
                    <h3 className={ProjectCSS.h3}>Product 2</h3>
                    <p className={ProjectCSS.p}>Some description for product 2.</p>
                    <button className={ProjectCSS.btn}>Buy Now</button>
                </div>

                <div className={ProjectCSS.card}>
                    <img className={ProjectCSS.img} src={image3} alt="Product 3" />
                    <h3 className={ProjectCSS.h3}>Product 3</h3>
                    <p className={ProjectCSS.p}>Some description for product 3.</p>
                    <button className={ProjectCSS.btn}>Buy Now</button>
                </div>
                <div className={ProjectCSS.card}>
                    <img className={ProjectCSS.img} src={image4} alt="Product 3" />
                    <h3 className={ProjectCSS.h3}>Product 3</h3>
                    <p className={ProjectCSS.p}>Some description for product 3.</p>
                    <button className={ProjectCSS.btn}>Buy Now</button>
                </div>
                <div className={ProjectCSS.card}>
                    <img className={ProjectCSS.img} src={image5} alt="Product 3" />
                    <h3 className={ProjectCSS.h3}>Product 3</h3>
                    <p className={ProjectCSS.p}>Some description for product 3.</p>
                    <button className={ProjectCSS.btn}>Buy Now</button>
                </div>
              
            </div>
            <button className={ProjectCSS.more}>More..</button>
        </div>
    )
}

export default Project
