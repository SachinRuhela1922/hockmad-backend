import React from 'react';
import CancelCSS from '../rozarCSS/CSS.module.css';
import Navbar from '../tempelate/Navbar';
import Footer from '../tempelate/Footer';

const Privacy = () => {
  return (
    
    <div className={CancelCSS.container}>
        <Navbar />
      <h1 className={CancelCSS.heading}>Privacy Policy</h1>

      <div className={CancelCSS.section}>
        <p>If You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures, and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You, and view Your profile.</p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Retention of Your Personal Data</h2>
        <p>Hockmad will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
        <p>Hockmad will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Transfer of Your Personal Data</h2>
        <p>Your information, including Personal Data, is processed at Hockmad’s operating offices and in any other places where the parties involved in the processing are located. This means that your information may be transferred to — and maintained on — computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in Your jurisdiction.</p>
        <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
        <p>Hockmad will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy, and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place, including the security of Your data and other personal information.</p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Disclosure of Your Personal Data</h2>
        <h3 className={CancelCSS.subsubheading}>Business Transactions</h3>
        <p>If Hockmad is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>

        <h3 className={CancelCSS.subsubheading}>Law Enforcement</h3>
        <p>Under certain circumstances, Hockmad may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</p>

        <h3 className={CancelCSS.subsubheading}>Other Legal Requirements</h3>
        <p>Hockmad may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
        <ul>
          <li>Comply with a legal obligation</li>
          <li>Protect and defend the rights or property of Hockmad</li>
          <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
          <li>Protect the personal safety of users of the Service or the public</li>
          <li>Protect against legal liability</li>
        </ul>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Security of Your Personal Data</h2>
        <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Children's Privacy</h2>
        <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Links to Other Websites</h2>
        <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party’s site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
        <p>We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
      </div>

      <div className={CancelCSS.section}>
        <h2 className={CancelCSS.subheading}>Changes to this Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the “Last updated” date at the top of this Privacy Policy.</p>
        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
