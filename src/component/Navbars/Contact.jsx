import React, { useState } from 'react';
import ContactCSS from '../NavbarsCSS/Contact.module.css';

import Navbar from '../tempelate/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
    const [isVisible, setIsVisible] = useState(false); // State to toggle answer visibility

    // Function to toggle the visibility of the answer
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={ContactCSS.faqBox}>
            <div className={ContactCSS.question}>
                <h3 className={ContactCSS.questions}>{question}</h3>
                {/* Adding rotation based on isVisible state */}
                <button
                    onClick={toggleVisibility}
                    className={`${ContactCSS.faqButton} ${isVisible ? ContactCSS.rotate : ""}`}
                >
                    <i className='bx bx-chevron-up'></i>
                </button>
            </div>
            {isVisible && <div className={ContactCSS.faqAnswer}>{answer}</div>}
        </div>
    );
};

const Contact = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        jobTitle: '',
        resumeLink: '',
        experience: '',
        coverLetter: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

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

        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);

            setResponseMessage('Application submitted successfully!');
        } catch (error) {
            if (error.response) {

                setResponseMessage('Error submitting application: ' + error.response.data.message);
            } else if (error.request) {

                setResponseMessage('No response from the server.');
            } else {

                setResponseMessage('Error setting up request: ' + error.message);
            }
        }
    };

    const faqs = [
        {
            question: "Send us a question",
            answer:<div>
                <p className={ContactCSS.sendpara}>Thank you for your interest in Hockmad's services. Please provide the following information about your business needs to help us serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within one to two business days.</p>
                <h4 className={ContactCSS.sendh4}>All fields with an asterisk (*) are required when completing this form.</h4>
            <form className={ContactCSS.sendform} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className={ContactCSS.label} htmlFor="name">Full Name:</label>
                    <input
                        className={ContactCSS.input}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className={ContactCSS.label} htmlFor="email">Email:</label>
                    <input
                        className={ContactCSS.input}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className={ContactCSS.label} htmlFor="jobTitle">Company/Organization</label>
                    <input
                        className={ContactCSS.input}
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className={ContactCSS.label} htmlFor="resumeLink">Country</label>
                    <input
                        className={ContactCSS.input}
                        type="text"
                        id="resumeLink"
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className={ContactCSS.label} htmlFor="experience">Phone number</label>
                    <input
                        className={ContactCSS.input}
                        id="experience"
                        type="number"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        rows="4"
                        required
                    ></input>
                </div>

                <div className="form-group">
                    <label className={ContactCSS.label} htmlFor="coverLetter">How can I help you?</label>
                    <textarea
                        className={ContactCSS.input}
                        id="coverLetter"
                        type="text"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        rows="6"
                        required
                    ></textarea>
                </div>

                <button className={ContactCSS.sendbtn} type="submit">Submit Application</button>
            </form>

            {responseMessage && <p id="responseMessage">{responseMessage}</p>}
        </div>
        },
        {
            question: "Job Seekers",
            answer: <div>
                <h1 className={ContactCSS.jobh1}>Want to look at our current job listings?</h1>
                <Link style={{all: 'unset'}} to="/career"><button className={ContactCSS.sendbtn} >Search Job</button></Link>
                 <h4 className={ContactCSS.sendh4}>All fields with an asterisk (*) are required when completing this form.</h4>
              <form className={ContactCSS.sendform} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className={ContactCSS.label} htmlFor="name">Full Name:</label>
                    <input
                        className={ContactCSS.input}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className={ContactCSS.label} htmlFor="email">Email:</label>
                    <input
                        className={ContactCSS.input}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className={ContactCSS.label} htmlFor="jobTitle">Interested Field</label>
                    <input
                        className={ContactCSS.input}
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className={ContactCSS.label} htmlFor="resumeLink">Country</label>
                    <input
                        className={ContactCSS.input}
                        type="text"
                        id="resumeLink"
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className={ContactCSS.label} htmlFor="experience">Phone number</label>
                    <input
                        className={ContactCSS.input}
                        id="experience"
                        type="number"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        rows="4"
                        required
                    ></input>
                </div>

                <div className="form-group">
                    <label className={ContactCSS.label} htmlFor="coverLetter">Have any question?</label>
                    <textarea
                        className={ContactCSS.input}
                        id="coverLetter"
                        type="text"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        rows="6"
                        required
                    ></textarea>
                </div>

                <button className={ContactCSS.sendbtn} type="submit">Submit Application</button>
            </form>

            {responseMessage && <p id="responseMessage">{responseMessage}</p>}
            </div>
       
        }
    ];

    return (
        <div className={ContactCSS.body}>
            <Navbar />
            <h1 className={ContactCSS.h1}>Contact Hockmad</h1>
            <p className={ContactCSS.p}>We appreciate your interest in Hockmad. Please select from the options below.</p>

            <h2 className={ContactCSS.h2}>General Inquiries</h2>
            <div className={ContactCSS.contacts}>
                <div className={ContactCSS.contact}>
                    <h1 className={ContactCSS.number}>+91 8475843925</h1>
                    <p className={ContactCSS.email}>it.hockmad@gmail.com</p>
                </div>
                <div className={ContactCSS.contact}>
                    <h1 className={ContactCSS.number}>+91 8475843925</h1>
                    <p className={ContactCSS.email}>technical@hockmad.com</p>
                    <p className={ContactCSS.post}>Chief Technical Officer</p>
                </div>
                <div className={ContactCSS.contact}>
                    <h1 className={ContactCSS.number}>+91 8475843925</h1>
                    <p className={ContactCSS.email}>operating@hockmad.com</p>
                    <p className={ContactCSS.post}>Chief Operating Officer</p>
                </div>
            </div>

            {/* FAQ Section */}
            <h2 className={ContactCSS.h5}>For specific questions, get in touch below</h2>
            <div className={ContactCSS.faqSection}>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
};

export default Contact;
