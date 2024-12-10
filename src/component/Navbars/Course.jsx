import React from 'react'
import CourseCSS from '../NavbarsCSS/Course.module.css'
import Navbar from '../tempelate/Navbar'
import Footer from '../tempelate/Footer'
import {Link} from 'react-router-dom'

const Course = () => {
  return (
    <div className={CourseCSS.body}>
      <Navbar />
      <button><Link to="/html">HTML</Link></button>
      <button><Link to="/css">CSS</Link></button>
      <button><Link to="/javascript">JavaScript</Link></button>
      <Footer />
    </div>
  )
}

export default Course
