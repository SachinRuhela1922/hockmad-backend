import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../tempelate/Navbar';
import ProjectCSS from '../NavbarsCSS/Projectwork.module.css'
import Footer from '../tempelate/Footer';

const ProjectWork = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Fetch data from backend
        axios.get('https://hockmad-frontend.onrender.com/api/appointments')  // Update with your API endpoint
            .then((response) => {

                setAppointments(response.data);  // Set the fetched data in state
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className={ProjectCSS.body}>
            <div className={ProjectCSS.projectworkcontainer}>
                <Navbar />
                <h1 className={ProjectCSS.head}>Project List</h1>
                <div className={ProjectCSS.cardscontainer}>
                    {appointments.map((appointment) => (
                        <div className={ProjectCSS.appointmentcards} key={appointment._id}>
                            <h3 className={ProjectCSS.h3}>{appointment.projectname}</h3>
                            
                            <p className={ProjectCSS.p}><span className={ProjectCSS.label}>Producer: </span>{appointment.name}</p>
                            <p className={ProjectCSS.p}><span className={ProjectCSS.label}>Category: </span>{appointment.project}</p>
                            <p className={ProjectCSS.p}><span className={ProjectCSS.label}>Skills: </span>{appointment.skills}</p>
                            <p className={ProjectCSS.p}><span className={ProjectCSS.label}>Description: </span>{appointment.description}</p>
                            <p className={ProjectCSS.p}><span className={ProjectCSS.label}>Function: </span>{appointment.function}</p>
                            <a className={ProjectCSS.btn} href={appointment.url}>Get Started</a>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectWork;
