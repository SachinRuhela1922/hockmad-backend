import React, { useState, useEffect } from 'react';
import PosterCSS from '../css/Poster.module.css'; // CSS file for styling
import Land from './Land';
import Trainingimg from './Trainingimg';
import About from './About';
import Project from './Project';
import Addition from './Addition';
import Training from './Training';
import Footer from './Footer';

const Poster = () => {
    const [isLoading, setIsLoading] = useState(true); // State to manage loading

    // Simulate loading time for demonstration purposes
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // After 2 seconds, hide the loader
        }, 2000);

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    // Scroll to a specific section by ID
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
        }
    };

    if (isLoading) {
        // Show loader when the page is still loading
        return (
            <div className={PosterCSS.loaderContainer}>
                <div className={PosterCSS.loader}></div>
                <p className={PosterCSS.loadingText}>Loading, please wait...</p>
            </div>
        );
    }

    // Once the loading is done, show the actual content
    return (
        <div>
            {/* Navbar Component */}
            <header className={PosterCSS.header}>
                <nav className={PosterCSS.nav}>
                    <ul className={PosterCSS.navlist}>
                        <li className={PosterCSS.navitem}>
                            <span className={PosterCSS.navlink} onClick={() => scrollToSection('home')}>
                                <i className='bx bx-home'></i>
                            </span>
                        </li>
                        <li className={PosterCSS.navitem}>
                            <span className={PosterCSS.navlink} onClick={() => scrollToSection('services')}>
                                <i className='bx bxs-comment-detail'></i>
                            </span>
                        </li>
                        <li className={PosterCSS.navitem}>
                            <span className={PosterCSS.navlink} onClick={() => scrollToSection('contact')}>
                                <i className='bx bxs-briefcase'></i>
                            </span>
                        </li>
                        <li className={PosterCSS.navitem}>
                            <span className={PosterCSS.navlink} onClick={() => scrollToSection('add')}>
                                <i className='bx bxs-contact'></i>
                            </span>
                        </li>
                        <li className={PosterCSS.navitem}>
                            <span className={PosterCSS.navlink} onClick={() => scrollToSection('training')}>
                                <i className='bx bxs-contact'></i>
                            </span>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Page Sections */}
            <section id="home" className={PosterCSS.sectionhome}>
                <Land />
            </section>
            <section id="about" className={PosterCSS.sectionabout}>
                <Trainingimg />
            </section>
            <section id="services" className={PosterCSS.sectionservice}>
                <About />
            </section>
            <section id="contact" className={PosterCSS.sectioncontact}>
                <Project />
            </section>
            <section id="faq" className={PosterCSS.sectionfaq}></section>
            <section id="add" className={PosterCSS.sectionadd}>
                <Addition />
            </section>
            <section id="training" className={PosterCSS.sectiontraining}>
                <Training />
            </section>
            <section id="footer" className={PosterCSS.sectionfooter}>
                <Footer />
            </section>
        </div>
    );
};

export default Poster;
