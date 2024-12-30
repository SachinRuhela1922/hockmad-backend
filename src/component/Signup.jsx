import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import LoginCSS from './css/Login.module.css';





function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const requestData = { username, password };
    
        console.log("Sending data:", requestData);  // Log data being sent
    
        try {
            const response = await axios.post('https://hockmad-frontend.onrender.com/signup', requestData, {
                headers: {
                    'Content-Type': 'application/json' // Ensure Content-Type is set to application/json
                }
            });
    
            if (response.status === 201) {
                navigate('/'); // Redirect to the login page after signup
            }
        } catch (error) {
            console.error('Signup error:', error.response || error);  // Log error details
            alert('An error occurred. Please try again later.');
        }
    };
    
    return (
        <div className={LoginCSS.body}>
        <div className={LoginCSS.wrapper}>




            <form onSubmit={handleSignup}>
                <h2 className={LoginCSS.h1}>Signup</h2>

                <div className={LoginCSS.input}>
                    <input className={LoginCSS.inputbox}
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <i className={`bx bxs-user ${LoginCSS.inputicon}`}></i>
                </div>


                <div className={LoginCSS.input}>
                    <input className={LoginCSS.inputbox}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <i className={`bx bxs-lock-alt ${LoginCSS.inputicon}`}></i>
                </div>

                <div className={LoginCSS.remember}>
                    <label className={LoginCSS.rememberlabel}><input type="checkbox" className={LoginCSS.remembercheckbox} />Remember me</label>
                    <Link className={LoginCSS.rememberlink} to="/signup">Forget Password?</Link>
                </div>

                <button type="submit" className={LoginCSS.btn}>Signup</button>
                <div className={LoginCSS.register}>
                    <p className={LoginCSS.registerp}>Already have an account?<Link className={LoginCSS.registerlink} to="/">Login</Link></p>
                </div>

            </form>


        </div>
    </div>
    );
}

export default Signup;
