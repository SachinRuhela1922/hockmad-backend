import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import backendcss from './Webdev.module.css'

import image from '../images/add4.jpeg';

const Frontend = () => {
    const [loading, setLoading] = useState(true); // Initial loading state for page
    const [mobileNumber, setMobileNumber] = useState(''); // Mobile number state
    const [password, setPassword] = useState(''); // Password state
    const [showMobileInput, setShowMobileInput] = useState(false); // To toggle mobile input visibility
    const navigate = useNavigate();

    // Simulate an API call or some data loading when the page is mounted
    useEffect(() => {
        setTimeout(() => {
            setLoading(false); // Stop loading after 2 seconds or on actual data fetching
        }, 2000); // Adjust the time as necessary
    }, []);

    const handlePayNowClick = () => {
        setShowMobileInput(true);
    };

    const handleBuyNow = async () => {
        if (mobileNumber === '' || mobileNumber.length !== 10) {
            alert('Please enter a valid 10-digit mobile number');
            return;
        }

        if (password === '') {
            alert('Please enter your password');
            return;
        }

        // Password validation using regex
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/;

        if (!passwordRegex.test(password)) {
            alert('Password must contain at least one alphabet, one number, and one special character.');
            return;
        }

        try {
            setLoading(true);

            // Step 1: Request a payment order from the backend
            const response = await fetch('https://hockmad-frontend.onrender.com/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: 1, // Multiply by 100 to convert INR to paise
                }),
            });

            const result = await response.json();

            if (response.ok && result.id) {
                // Step 2: Initialize Razorpay checkout
                const options = {
                    key: 'rzp_live_066PJHSI9mHDE0',  // Replace with your Razorpay key
                    amount: result.amount,
                    currency: result.currency,
                    name: 'Course Payment',
                    order_id: result.id,
                    handler: async function (response) {
                        // Step 3: Payment successful, store mobile number and password in MongoDB
                        await fetch('https://hockmad-frontend.onrender.com/api/store-number', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                mobileNumber: mobileNumber,
                                password: password,
                            }),
                        });

                        // Step 4: Redirect to payment success page
                        navigate('/paymentsuccess', { state: { paymentId: response.razorpay_payment_id } });
                    },
                    prefill: {
                        name: 'Sachin',
                        email: 'pratapruhela1922@gmail.com',
                        contact: mobileNumber,
                    },
                    theme: {
                        color: 'blue',
                    },
                };

                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            } else {
                throw new Error('Payment initiation failed');
            }
        } catch (error) {
            console.error('Error processing the payment:', error);
            alert('Payment initiation failed. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div>
        {loading ? (
          <div className={backendcss.loader}></div>
        ) : (
          <div className={backendcss.body}>
            
            <div className={backendcss.poster}>
              <h1 className={backendcss.h1}>Web Development Course</h1>
            </div>
            <div className={backendcss.card}>
              <div className={backendcss.container}>
                <div className={backendcss.content}>
                  <img className={backendcss.banner} src={image} alt='' />
                  <h2 className={backendcss.title}>Complete Web Development</h2>
                  <div className={backendcss.price}>
                    <p className={backendcss.p}>1500</p>
                    <span className={backendcss.span}>14% off</span>
                  </div>
      
                  {!showMobileInput && (
                    <button
                      className={backendcss.payNowButton}
                      onClick={handlePayNowClick}
                    >
                      Pay Now
                    </button>
                  )}
      
                  {showMobileInput && (
                    <div>
                      <input
                        type="tel"
                        className={backendcss.mobileInput}
                        placeholder="Enter your mobile number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        maxLength="10"
                      />
                      <input
                        type="text"
                        className={backendcss.mobileInput}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        maxLength="20"
                      />
                      
            {/* Password Criteria */}
            <div className={backendcss.passwordCriteria}>
              <h4>Password Criteria</h4>
              <ul>
                <li className={password.length >= 6 ? backendcss.valid : ''}>At least 6 characters</li>
                <li className={/(?=.*[A-Za-z])/.test(password) ? backendcss.valid : ''}>Contains an alphabet</li>
                <li className={/(?=.*\d)/.test(password) ? backendcss.valid : ''}>Contains a number</li>
                <li className={/(?=.*[!@#$%^&*])/.test(password) ? backendcss.valid : ''}>Contains a special character</li>

              </ul>
            </div>
                      <button
                        className={backendcss.payNowButton}
                        onClick={handleBuyNow}
                        disabled={loading}
                      >
                        {loading ? 'Processing...' : 'Proceed to Payment'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
      
      
            {/* Course Description */}
            <div className={backendcss.courseDescription}>
              <h3 className={backendcss.h3}>Course Details</h3>
              <div className={backendcss.topics}>
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
              <p><strong>Course Objective:</strong> To provide a comprehensive understanding of frontend development.</p>
              
            </div>
          </div>
        )}
      </div>
      
    );
};

export default Frontend;
