import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseCSS from '../NavbarsCSS/Course.module.css';
import logo from '../images/hockmadlogo.jpeg';
import banner from '../images/frontend.jpeg';

const Course = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);

  // Sample card data (replace with actual dynamic data)
  const cardsData = [
    { id: 1, title: 'Complete Web Development', off: '19% ',price: 'Price: @1099', link:'https://rzp.io/rzp/niCb2YbA', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Only Frontend', off: '14% ',price: 'Price: @800', link:'https://rzp.io/rzp/jrSkdK0m', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Only Javascript', off: '14% ',price: 'Price: @800', link:'https://rzp.io/rzp/jrSkdK0m', image: 'https://via.placeholder.com/150' },
  ];

  // Simulate loading (replace with actual data fetching)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulate data load
    }, 2000);
  }, []);

  // Filter cards based on search query
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredCards(cardsData); // Show all cards if no search query
    } else {
      const filtered = cardsData.filter(card =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCards(filtered);
    }
  }, [searchQuery]);

  // Loader Component
  const Loader = () => (
    <div className={CourseCSS.loader}>
      <div className={CourseCSS.spinner}></div>
    </div>
  );

  return (
    <div className={CourseCSS.body}>
      {loading && <Loader />} {/* Show the loader while loading is true */}

      <nav className={CourseCSS.navbar}>
        <div className={CourseCSS.navbarleft}>
          <img className={CourseCSS.logoimg} src={logo} alt="Logo" />
        </div>
        <div className={CourseCSS.navbarright}>
          <div className={CourseCSS.searchbox}>
            <input
              className={CourseCSS.search}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={CourseCSS.searchbtn}>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <button className={CourseCSS.navbtn}>Sign In</button>
        </div>
      </nav>

      <div className={CourseCSS.container}>
        <div className={CourseCSS.sidebar}>
          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </div>
        <div className={CourseCSS.content}>
          <img className={CourseCSS.banner} src={banner} alt="" />

          {/* Cards Section */}
          <div className={CourseCSS.cards}>
            {filteredCards.length === 0 ? (
              <p className={CourseCSS.noResults}>No results found</p>
            ) : (
              filteredCards.map(card => (
                <div key={card.id} className={CourseCSS.card}>
                  <img src={card.image} alt={card.title} />
                  <h3>{card.title}</h3>
                  <div className={CourseCSS.price}>
                  <p>{card.price}</p>
                  <span>{card.off}</span>
                  </div>
                  <Link
                    to={`/course/${card.id}`}
                    state={{ card }} // Pass the selected card data to the details page
                  >
                    <button className={CourseCSS.cardbtn}>Learn More</button>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
