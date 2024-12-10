import React from 'react'
import BlogCSS from '../NavbarsCSS/Blog.module.css'
import Navbar from '../tempelate/Navbar'

const Blog = () => {
  return (
    <div className={BlogCSS.body}>
      <Navbar />
    </div>
  )
}

export default Blog
