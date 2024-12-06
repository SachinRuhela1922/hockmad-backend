import React from 'react';
import PosterCSS from '../css/Poster.module.css'; // CSS file for styling
import Land from './Land';
import Trainingimg from './Trainingimg';
import About from './About';
import Project from './Project';
import Addition from './Addition';
import Training from './Training';
import Footer from './Footer';



const Poster = () => {
    // Scroll to a specific section by ID
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
        }
    };

    return (
        <div>
            {/* Navbar Component */}
            <header className={PosterCSS.header}>
                <nav className={PosterCSS.nav}>
                    <ul className={PosterCSS.navlist}>
                        <li className={PosterCSS.navitem}>
                            <span className={PosterCSS.navlink} onClick={() => scrollToSection('home')}>
                            <i class='bx bx-home'></i>
                            </span>
                        </li>
                        <li className={PosterCSS.navitem}>
                            <span className={PosterCSS.navlink} onClick={() => scrollToSection('services')}>
                            <i class='bx bxs-comment-detail' ></i>
                            </span>
                        </li>
                        <li className={PosterCSS.navitem}>
                            <span className={PosterCSS.navlink} onClick={() => scrollToSection('contact')}>
                            <i class='bx bxs-briefcase' ></i>
                            </span>
                        </li>
                        <li className={PosterCSS.navitem}>
                            <span className={PosterCSS.navlink} onClick={() => scrollToSection('add')}>
                            <i class='bx bxs-contact' ></i>
                            </span>
                        </li>
                        <li className={PosterCSS.navitem}>
                            <span className={PosterCSS.navlink} onClick={() => scrollToSection('training')}>
                            <i class='bx bxs-contact' ></i>
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
            <section id="faq" className={PosterCSS.sectionfaq}>
                
            </section>
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
