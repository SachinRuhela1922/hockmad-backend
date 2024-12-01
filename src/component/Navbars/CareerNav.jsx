import React, { useState } from 'react';
import CareerNavCSS from '../NavbarsCSS/CareerNav.module.css';
import Navbar from '../tempelate/Navbar';
import Footer from '../tempelate/Footer';
import imag1 from '../images/slide1.jpeg';
import imag2 from '../images/slide2.jpeg';
import imag3 from '../images/slide3.jpeg';
import imag4 from '../images/slide4.jpeg';
import imag5 from '../images/frontend.jpeg';
import imag6 from '../images/backend.jpeg';
import imag7 from '../images/UI.jpeg';
import { Link } from 'react-router-dom';

const CareerNav = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of content for each slide
  const contentData = [
    {
      title: 'Grow your Career',
      description: 'From developers and designers to strategists and SAP pros, there are endless opportunities for you to learn',
      bgColor: '#FF0000',
      imageUrl: imag1

    },
    {
      title: 'Technology',
      description: 'Get hands-on with the emerging technologies that our clients need to grow and work in new ways.',
      bgColor: '#00FF00',
      imageUrl: imag2

    },
    {
      title: 'Operations',
      description: 'Join a team where technology elevates people—not the other way around.',
      bgColor: '#0000FF',
      imageUrl: imag3

    },
    {
      title: 'Analytics',
      description: 'AI is everywhere and it’s maturing at a rapid pace. Bring your skills and innovative approaches to help us advance it responsibly.',
      bgColor: '#0000FF',
      imageUrl: imag4

    }
  ];

  // Function to show the correct slide
  const showSlide = (index) => {
    if (index >= contentData.length) {
      setCurrentSlide(0); // Loop to first slide
    } else if (index < 0) {
      setCurrentSlide(contentData.length - 1); // Loop to last slide
    } else {
      setCurrentSlide(index);
    }
  };

  return (
    <div className={CareerNavCSS.body}>
      <Navbar />
      <div className={CareerNavCSS.head}>
        <span className={CareerNavCSS.span}>#Shape Your Future, Master Your Skills!</span>
        <h1 className={CareerNavCSS.h1}>Building Future Skills for Success</h1>
        <p className={CareerNavCSS.p}>
          In today's fast-paced world, building future skills is essential for long-term career success. As industries evolve and technology advances, adapting to new tools and learning continuously is key.
        </p>
        <button className={CareerNavCSS.btn}><Link className={CareerNavCSS.subbtn} to="/career">Join Us!</Link></button>
      </div>
      <h1 className={CareerNavCSS.slideh1}>Whatever you want to do</h1>
      <div className={CareerNavCSS.slidercontainer}>
        <div className={CareerNavCSS.slider}>
          <div className={CareerNavCSS.slides} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {contentData.map((content, index) => (
              <div
                key={index}
                className={`${CareerNavCSS.slide} ${CareerNavCSS.imageContainer}`} // Adding a class
                style={{
                  backgroundImage: `url(${content.imageUrl})`,
                  backgroundColor: content.bgColor,

                }}
              ></div>
            ))}
          </div>
          <button className={CareerNavCSS.prev} onClick={() => showSlide(currentSlide - 1)}>❮</button>
          <button className={CareerNavCSS.next} onClick={() => showSlide(currentSlide + 1)}>❯</button>
        </div>

        <div className={CareerNavCSS.content}>
          <div className={CareerNavCSS.contenttext}>
            <h2 className={CareerNavCSS.text}>{contentData[currentSlide].title}</h2>
            <p className={CareerNavCSS.description}>{contentData[currentSlide].description}</p>

          </div>
        </div>
      </div>
      <h1 className={CareerNavCSS.slideh1}>career opportunities</h1>
      <div className={CareerNavCSS.cards}>

        <div className={CareerNavCSS.container}>
          <div className={CareerNavCSS.card}>
            <div className={CareerNavCSS.data}>
              <img className={CareerNavCSS.cardimg} src={imag5} alt="" />
              <h3 className={CareerNavCSS.cardh3}>Frontend</h3>
              <p className={CareerNavCSS.cardp}>The visual part of a website or application that users interact with directly, involving technologies like HTML, CSS, and JavaScript.</p>
            </div>
          </div>

          <div className={CareerNavCSS.card}>
            <div className={CareerNavCSS.data}>
              <img className={CareerNavCSS.cardimg} src={imag6} alt="" />
              <h3 className={CareerNavCSS.cardh3}>Backend</h3>
              <p className={CareerNavCSS.cardp}>The server-side logic, databases, and APIs that power the application's functionality, typically built with languages like Node.js, Python, or PHP.</p>
            </div>
          </div>

          <div className={CareerNavCSS.card}>
            <div className={CareerNavCSS.data}>
              <img className={CareerNavCSS.cardimg} src={imag7} alt="" />
              <h3 className={CareerNavCSS.cardh3}>UI/UX Designer</h3>
              <p className={CareerNavCSS.cardp}>The design and layout of the application, focused on providing a smooth and intuitive experience for users through visual elements like buttons, icons, and forms.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareerNav;
