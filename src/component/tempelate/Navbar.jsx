import React, { useState, useEffect } from 'react';
import logo from '../images/hockmadlogo.jpeg';
import NavCSS from '../css/Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setDropdownOpen(false); // Close dropdown when menu closes
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleMouseEnter = () => {
        if (!isMobile) {
            setDropdownOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize(); // Check on initial render
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={NavCSS.body}>
            <header className={NavCSS.header}>
                <div className={NavCSS.logo}>
                    <img src={logo} className={NavCSS.logoimg} alt="Logo" />
                    <Link className={NavCSS.headerlogo} to="/home">Hockmad</Link>
                </div>

                <nav className={`${NavCSS.nav} ${menuOpen ? NavCSS.show : ''}`} id="nav-menu">
                    <i className={`bx bx-x ${NavCSS.close}`} id="close-menu" onClick={closeMenu}></i>
                    <ul className={NavCSS.navlist}>
                        <li className={NavCSS.navitem}>
                            <Link to="/" className={NavCSS.navlink} onClick={closeMenu}>Home</Link>
                        </li>

                       

                        <li className={NavCSS.navitem}>
                            <Link to="/appointment" className={NavCSS.navlink} onClick={closeMenu}>Projects</Link>
                        </li>

                         {/* Dropdown menu */}
                         <li
                            className={NavCSS.navitem}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={isMobile ? toggleDropdown : undefined}
                        >
                            <span className={`${NavCSS.navlink} ${NavCSS.dropdownToggle}`}>
                                About
                            </span>
                            {dropdownOpen && (
                                <ul className={NavCSS.dropdownMenu}>
                                   
                                    <li className={NavCSS.dropdownItem}>
                                        <Link to="/training" className={NavCSS.navlink} onClick={closeMenu}>
                                            Training
                                        </Link>
                                    </li>
                                    <li className={NavCSS.dropdownItem}>
                                        <Link to="/project" className={NavCSS.navlink} onClick={closeMenu}>
                                            Project
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className={NavCSS.navitem}>
                            <Link to="/careernav" className={NavCSS.navlink} onClick={closeMenu}>Career</Link>
                        </li>
                        <li className={NavCSS.navitem}>
                            <Link to="/blog" className={NavCSS.navlink} onClick={closeMenu}>Blog</Link>
                        </li>
                        <li className={NavCSS.navitem}>
                            <Link to="/contact" className={NavCSS.navlink} onClick={closeMenu}>Contact</Link>
                        </li>
                     
                        <li className={NavCSS.navitem}>
                            <Link to="/" className={NavCSS.navlink}  onClick={closeMenu}><span className={NavCSS.navspan}>Logout</span></Link>
                        </li>
                    </ul>
                </nav>

                <i className={`bx bx-menu ${NavCSS.menuicon}`} id="toggle-menu" onClick={toggleMenu}></i>
            </header>
        </div>
    );
};

export default Navbar;
