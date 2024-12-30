import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CoursedetailCSS from '../NavbarsCSS/CourseDetails.module.css';
import Navbar from '../tempelate/Navbar';

const CourseDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { card } = location.state;

  // State to control the popup visibility
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);

  // Handle form input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://hockmad-frontend.onrender.com/api/newuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      console.log('Response from server:', data);

      // Redirect to another URL after successful submission
      window.location.href = card.link;

    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={CoursedetailCSS.body}>
      <Navbar />
      <div className={CoursedetailCSS.poster}>
        <h1 className={CoursedetailCSS.h1}>{card.title}</h1>
      </div>
      <div className={CoursedetailCSS.card}>
        <div className={CoursedetailCSS.container}>
          <div className={CoursedetailCSS.content}>
            <img className={CoursedetailCSS.banner} src={card.image} alt={card.title} />
            <h2 className={CoursedetailCSS.title}>{card.title}</h2>
            <div className={CoursedetailCSS.price}>
              <p className={CoursedetailCSS.p}>{card.price}</p>
              <span className={CoursedetailCSS.span}>{card.off}</span>
            </div>
            <button className={CoursedetailCSS.btn} onClick={() => setShowPopup(true)}>
              Pay Now
            </button>
          </div>
        </div>
      </div>

      {/* Course Description at the bottom of the banner */}
      <div className={CoursedetailCSS.courseDescription}>
        <h3>Course Details</h3>
        <div className={CoursedetailCSS.topics}>
          <h4>Topics Covered:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Responsive Design</li>
            <li>Version Control with Git</li>
            <li>Web Accessibility</li>
            <li>Frontend Tools</li>
          </ul>
        </div>
        <p><strong>Course Objective:</strong> To provide a comprehensive understanding of frontend development, enabling students to build interactive and visually appealing websites.</p>
        <p><strong>Benefits:</strong> Gain proficiency in building modern websites, improve problem-solving skills, learn the latest tools in web development, and create a portfolio of real-world projects.</p>
        <p><strong>Experience:</strong> Hands-on learning through project-based assignments, live coding sessions, and exposure to industry-standard practices.</p>
        <p><strong>Career Opportunities:</strong> Frontend developers are in high demand across various industries. Graduates can pursue roles as web developers, UI/UX designers, front-end engineers, and more.</p>
        <p><strong>Values:</strong> This course promotes creativity, collaboration, and a focus on practical skills that will directly contribute to building professional-level projects.</p>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className={CoursedetailCSS.popup}>
          <div className={CoursedetailCSS.popupContent}>
            <h2 className={CoursedetailCSS.h2}>Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Loading Spinner/Button */}
              <div className={CoursedetailCSS.buttons}>
                <button className={CoursedetailCSS.submit} type="submit" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
                <button className={CoursedetailCSS.cancel} type="button" onClick={() => setShowPopup(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
