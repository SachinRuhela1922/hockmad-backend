import { Routes, Route } from 'react-router-dom';
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';
import Home from './component/Home.jsx';
import Appointment from './component/Appointment.jsx'
import Career from './component/Navbars/Career.jsx';
import CareerNav from './component/Navbars/CareerNav.jsx';
import Course from './component/Navbars/Course.jsx';
import Projectwork from './component/Navbars/Projectwork.jsx';
import Contact from './component/Navbars/Contact.jsx';
import Blog from './component/Navbars/Blog.jsx';

import Started from './component/tempelate/Started.jsx';

import Css from './component/course/Css.jsx';
import Javascript from './component/course/Javascript.jsx';
import EmailForm from './EmailForm.jsx';
import CourseDetails from './component/Navbars/CourseDetails.jsx';
import Privacy from './component/rozar/Privacy.jsx';
import Terms from './component/rozar/Terms.jsx';
import Cancel from './component/rozar/Cancel.jsx';



function App() {
    return (
        
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/careernav" element={<CareerNav />} />
                    <Route path="/training" element={<Course />} />
                    <Route path="/project" element={<Projectwork />} />
                    <Route path="/html" element={<EmailForm />} />
                    <Route path="/css" element={<Css />} />
                    <Route path="/javascript" element={<Javascript />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/course/:id" element={<CourseDetails />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cancel" element={<Cancel />} />
                    <Route path="/" element={<Started />} />
                    
                    
                    
                    <Route path="*" element={<div>Page not found</div>} />
                    
                </Routes>
            </div>
        
    );
}

export default App;
