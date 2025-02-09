import React, { useState } from 'react';
import axios from 'axios';
import Hockmad from '../images/hockmadlogo.jpeg';
import { Link } from 'react-router-dom';

import CareerCSS from './Career.module.css';



const Career = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        jobTitle: '',
        resumeLink: '',
        experience: '',
        coverLetter: ''
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);  // State to track loading

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true); // Set loading to true when form is submitted

        try {
            const response = await axios.post('https://hockmad-frontend.onrender.com/api/career', formData);

            setResponseMessage(response.data.message); // Display success message
        } catch (error) {
            if (error.response) {
                setResponseMessage('Error submitting application: ' + error.response.data.message);
            } else if (error.request) {
                setResponseMessage('No response from the server.');
            } else {
                setResponseMessage('Error setting up request: ' + error.message);
            }
        } finally {
            setLoading(false); // Reset loading state once the request is complete
        }
    };

    return (
        <>
            <div className={CareerCSS.body}>
                
                <div className={CareerCSS.content}>
                    <span className={CareerCSS.span}>| New Job Search</span>
                    <h1 className={CareerCSS.head}>Application Lead</h1>
                    <p className={CareerCSS.para}>MULTILOCATIONS&nbsp; | &nbsp;FULL TIME</p>
                    <Link to="/careerNav"><button className={CareerCSS.back}>Visit</button></Link>
                    <p className={CareerCSS.p}>Please be informed that at any given point in time, you can only have one application.</p>

                    <div className={CareerCSS.jobdescribe}>
                        <h2 className={CareerCSS.jobtitle}>Job Description</h2>
                        <p className={CareerCSS.jobdesc}><b>Project Role:</b> Web Developer</p>
                        <p className={CareerCSS.jobdesc}><b>Project Role Description:</b> Develop, test, and maintain responsive websites and web applications using modern web technologies (HTML, CSS, JavaScript, etc.).</p>
                        <p className={CareerCSS.jobdesc}><b>Must have Skills:</b> HTML5, CSS3, JavaScript (ES6+).</p>
                        <p className={CareerCSS.jobdesc}><b>Good to have Skills:</b> Frameworks/libraries such as React.js, Vue.js, Node.js, Express, or other server-side languages</p>
                        <p className={CareerCSS.jobdesc}><b>Educational Qualification:</b> Must be currently pursuing a Bachelor of Technology (B.Tech) or equivalent in Computer Science, Information Technology, or a related field.</p>
                    </div>
                </div>

                <div className={CareerCSS.container}>
                    <img className={CareerCSS.hockmad} src={Hockmad} alt="Hockmad Logo" />
                    <h1 className={CareerCSS.formh1}>Internship Application Form</h1>

                    {loading ? (
                        <div className={CareerCSS.loadingContainer}>
                            <div className={CareerCSS.spinner}></div>
                            <p>Submitting application...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className={CareerCSS.label} htmlFor="name">Full Name:</label>
                                <input
                                    className={CareerCSS.input}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className={CareerCSS.label} htmlFor="email">Email:</label>
                                <input
                                    className={CareerCSS.input}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className={CareerCSS.label} htmlFor="jobTitle">Job Title:</label>
                                <input
                                    className={CareerCSS.input}
                                    type="text"
                                    id="jobTitle"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className={CareerCSS.label} htmlFor="resumeLink">Resume Link:</label>
                                <input
                                    className={CareerCSS.input}
                                    type="url"
                                    id="resumeLink"
                                    name="resumeLink"
                                    value={formData.resumeLink}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className={CareerCSS.label} htmlFor="experience">Experience:</label>
                                <textarea
                                    className={CareerCSS.input}
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label className={CareerCSS.label} htmlFor="coverLetter">Cover Letter:</label>
                                <textarea
                                    className={CareerCSS.input}
                                    id="coverLetter"
                                    name="coverLetter"
                                    value={formData.coverLetter}
                                    onChange={handleChange}
                                    rows="6"
                                    required
                                ></textarea>
                            </div>

                            <button className={CareerCSS.btn} type="submit">Submit Application</button>
                        </form>
                    )}

                    {responseMessage && <p id="responseMessage">{responseMessage}</p>}
                </div>
            </div>

            <div className={CareerCSS.footer}>
                
            </div>
        </>
    );
};

export default Career;
