import React from 'react';
import CancelCSS from '../rozarCSS/CSS.module.css';
import Footer from '../tempelate/Footer';
import Navbar from '../tempelate/Navbar';

const Terms = () => {
  return (
    <div className={CancelCSS.container}>
        <Navbar />
      <h1 className={CancelCSS.heading}>Terms and Conditions</h1>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Welcome</h2>
        <p>
          If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Hockmad's relationship with you in relation to this website.
        </p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Ownership and Use</h2>
        <p>
          The term ‘Hockmad’ or ‘us’ or ‘we’ refers to the owner of the website. The term ‘you’ refers to the user or viewer of our website.
        </p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Terms of Use</h2>
        <p>
          The use of this website is subject to the following terms of use:
        </p>
        <ul>
          <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
          <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.</li>
          <li>You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
          <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
          <li>It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
        </ul>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Intellectual Property</h2>
        <p>
          This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
        </p>
        <p>
          All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.
        </p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Liability and Risk</h2>
        <p>
          Unauthorized use of this website by you may give rise to a claim for damages and/or be a criminal offense.
        </p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>External Links</h2>
        <p>
          From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We take no responsibility for the content of the linked website(s).
        </p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Linking to Our Website</h2>
        <p>
          You may not create a link to this website from another website or document without Hockmad's prior consent.
        </p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Dispute and Jurisdiction</h2>
        <p>
          Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.
        </p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Payment Terms</h2>
        <p>
          Credit Card orders will commence on receiving the authorization/confirmation from the Credit Card/respective Payment Gateway companies.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
