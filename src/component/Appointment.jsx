import React, { useState } from 'react';
import Navbar from './tempelate/Navbar';
import AppointCSS from '../component/css/Appointment.module.css';
import axios from 'axios';
import Footer from './tempelate/Footer';

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
        function: '',
        description: '',
        skills: '' // Will store the selected skill
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Save the form data temporarily (optional, depends on your flow)
        try {
            const response = await axios.post(
                "https://hockmad-frontend.onrender.com/api/appointments",
                formData
            );
            console.log("Temporary data saved:", response.data);

            // Fetch Razorpay order creation details from your backend
            const orderResponse = await axios.post("http://localhost:5000/api/create-order", {
                amount: 5000 // Example amount, change as needed
            });

            const { id: order_id } = orderResponse.data;

            const options = {
                key: "your_razorpay_key", // Replace with your Razorpay key
                amount: 5000, // Amount in paise (5000 = 50 INR)
                currency: "INR",
                name: "Hockmad Payment",
                description: "Payment for project",
                order_id: order_id,
                handler: function (response) {
                    alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
                    // Optionally, send payment info to backend for further processing
                    axios.post("http://localhost:5000/api/payment-success", {
                        payment_id: response.razorpay_payment_id,
                        order_id: order_id
                    });
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#F37254"
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error("Error saving data before payment:", error);
            alert("There was an error saving your data. Please try again.");
        }
    };

``
    return (
        <div>
            <Navbar />
            <div className={AppointCSS.body}>
                <h1 className={AppointCSS.slogan}>Boost your project with our expert trainers</h1>
                <h2 className={AppointCSS.head}><span className={AppointCSS.subhead}>Home/ </span> Project Section</h2>
                <p className={AppointCSS.intro}>A platform where innovation meets execution. We encourage individuals to share their creative ideas or project concepts, and our team collaborates to bring them to life. From brainstorming to implementation, we turn visionary ideas into functional realities, fostering innovation and skill development along the way.</p>
                
               
                <form className={AppointCSS.form} onSubmit={handleSubmit}>
                <h1 className={AppointCSS.h1}>Register your Project</h1>
                    <div className={AppointCSS.format}>
                        <label className={AppointCSS.label}>Name:</label>
                        <input
                            className={AppointCSS.input}
                            type="text"
                            name="name"
                            placeholder='Full Name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={AppointCSS.format}>
                        <label className={AppointCSS.label}>Email:</label>
                        <input
                            className={AppointCSS.input}
                            type="email"
                            name="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={AppointCSS.format}>
                        <label className={AppointCSS.label}>Project Name</label>
                        <input
                            className={AppointCSS.input}
                            type="text"
                            placeholder='Project Name'
                            name="projectname"
                            value={formData.projectname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={AppointCSS.format}>
                        <label className={AppointCSS.label}>Project Type:</label>
                        <select
                            className={AppointCSS.input}
                            name="project"

                            value={formData.project}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>
                                Select
                            </option>
                            <option value="Website">Website</option>
                            <option value="Web Application">Web Application</option>
                            <option value="Mobile Application">Mobile Application</option>
                            <option value="Desktop Software">Desktop Software</option>
                            <option value="Full Stack Application">Full Stack Application</option>
                            <option value="Frontend-only Project">Frontend-only Project</option>
                            <option value="Backend-only Project">Backend-only Project</option>
                            <option value="Hybrid Application">Hybrid Application</option>
                            <option value="Progressive Web Application">Progressive Web Application</option>
                            <option value="Microservices-Based Project">Microservices-Based Project</option>
                            <option value="Static Website">Static Website</option>
                            <option value="Dynamic Website">Dynamic Website</option>
                            <option value="Content Management System">Content Management System</option>
                            <option value="Game Development">Game Development</option>
                            <option value="IoT Based Application">IoT Based Application</option>
                        </select>
                    </div>
                    <div className={AppointCSS.format}>
                        <label className={AppointCSS.label}>Function:</label>
                        <input
                            className={AppointCSS.input}
                            type="text"
                            name="function"
                            placeholder='Function of Project'
                            value={formData.function}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={AppointCSS.format}>
                        <label className={AppointCSS.label}>Description:</label>
                        <textarea
                            className={AppointCSS.input}
                            type="text"
                            name="description"
                            placeholder='Description'
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={AppointCSS.format}>
                        <label className={AppointCSS.label}>Skills:</label>
                        <input
                            className={AppointCSS.input}
                            name="skills"
                            placeholder='Skills'
                            value={formData.skills}
                            onChange={handleChange}
                            required />


                    </div>
                    <button className={AppointCSS.btn} type="submit">
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Appointment;
