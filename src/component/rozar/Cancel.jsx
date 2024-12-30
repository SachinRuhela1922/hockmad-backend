import React from 'react';
import CancelCSS from '../rozarCSS/CSS.module.css';
import Navbar from '../tempelate/Navbar';
import Footer from '../tempelate/Footer';

const Cancel = () => {
  return (
    <div className={CancelCSS.container}>
        <Navbar />
      <h1 className={CancelCSS.heading}>Refund and Cancellation Policy</h1>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Eligibility for Refund</h2>
        <p>
          You are entitled to a refund under the following circumstances:
        </p>
        <ul>
          <li>
            If the course you purchased has not been assigned to you within the specified expiration date from your date of purchase, you are eligible for a full refund.
          </li>
          <li>
            If you have mistakenly paid twice for the same course, we will issue a refund for the extra amount paid.
          </li>
        </ul>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Non-Refundable Circumstances</h2>
        <p>
          Under any other circumstance, we will not consider any requests for a refund. This policy applies to all digital course purchases. Since the nature of the product is digital, once it has been delivered or assigned to you, we cannot process a refund.
        </p>
        <p>
          We understand that this policy may not be ideal in certain situations, but we urge you to review the course details and ensure that it fits your needs before purchasing. We provide ample information about the course content, structure, and benefits so that you can make an informed decision.
        </p>
        <p>
          If you experience technical issues or any difficulties with course access within the specified period, we encourage you to reach out to our support team. We will work with you to resolve any issues promptly.
        </p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Refund Process</h2>
        <p>
          In case you qualify for a refund based on the criteria mentioned above, the process will begin once you submit a refund request through the support channels. Please provide the necessary information such as your order number, payment details, and any relevant documentation or proof for the refund claim. We strive to process refunds promptly but please allow up to 10 business days for your refund to be credited to your original payment method.
        </p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Support and Assistance</h2>
        <p>
          If you need further assistance or have questions regarding the refund process, please contact our customer support team at <strong>Email: hockmad1922@gmail.com</strong>. We are here to help and will do our best to address any concerns you may have.
        </p>
        <p>
          We appreciate your understanding of our refund and cancellation policy, and we remain committed to providing you with quality courses and services.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Cancel;
