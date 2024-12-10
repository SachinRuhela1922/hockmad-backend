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
import Html from './component/course/Html.jsx';
import Css from './component/course/Css.jsx';
import Javascript from './component/course/javascript.jsx';


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
                    <Route path="/html" element={<Html />} />
                    <Route path="/css" element={<Css />} />
                    <Route path="/javascript" element={<Javascript />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/" element={<Started />} />
                    
                    
                    <Route path="*" element={<div>Page not found</div>} />
                    
                </Routes>
            </div>
        
    );
}

export default App;
