import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate for redirection
import success from '../payment-success/PaymentSuccess.module.css';


const PaymentSuccess = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  // Function to handle the redirection when the button is clicked
  const handleRedirect = () => {
    navigate('/mycourse'); // Replace with the target page path (e.g., '/home', '/dashboard', etc.)
  };

  return (
    <div className={success.body}>
      <div className={success.container}>
        <img src={paymentImage} alt="Payment Successful" className={success.image} />
        <h1 className={success.h1}>Payment Successful!</h1>
        <p className={success.p}>Your payment was processed successfully. Thank you for your purchase!</p>
        <button className={success.button} onClick={handleRedirect}>
          Go to Course
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
