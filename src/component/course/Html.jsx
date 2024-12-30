import React from 'react'
import HtmlCSS from '../coursecss/Html.module.css'
import Navbar from '../tempelate/Navbar'
import Footer from '../tempelate/Footer'
import {Link} from 'react-router-dom'

const Html = () => {
  return (
    <div className={HtmlCSS.body}>
      <Navbar />
      <nav className={HtmlCSS.nav}>
        <ul className={HtmlCSS.ul}>
            <li><Link to="/html" className={HtmlCSS.home}>Home</Link></li>
            <li><Link>HTML Concept</Link></li>
        </ul>
      </nav>
      <Footer />
    </div>
  )
}

export default Html
