import React, { useState } from 'react';

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });
      const result = await response.json();

      if (result.success) {
        setStatus('Email sent successfully!');
      } else {
        setStatus(`Failed to send email: ${result.error}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Send an Email</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="to">To:</label>
          <input
            type="email"
            id="to"
            name="to"
            value={emailData.to}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={emailData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={emailData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send Email</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default EmailForm;
