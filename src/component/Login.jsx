import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginCSS from './css/Login.module.css';



function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });

            console.log(response);  // Log the entire response to check the token

            if (response.status === 200) {
                const token = response.data.token;  // Make sure token is being returned in the response
                localStorage.setItem('token', token);
                
                navigate('/home');
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 404) {
                alert('User not found. Please check your username.');
                navigate('/signup');
            } else if (error.response && error.response.status === 401) {
                alert('Invalid credentials. Please try again.');
            } else {
                alert('An error occurred. Please try again later.');
            }
        }
    };


    return (
        <div className={LoginCSS.body}>
            <div className={LoginCSS.wrapper}>




                <form onSubmit={handleLogin}>
                    <h2 className={LoginCSS.h1}>Login</h2>

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

                    <button type="submit" className={LoginCSS.btn}>Login</button>
                    <div className={LoginCSS.register}>
                        <p className={LoginCSS.registerp}>Don't have an account?<Link className={LoginCSS.registerlink} to="/signup">Register</Link></p>
                    </div>

                </form>


            </div>
        </div>
    );
}

export default Login;
