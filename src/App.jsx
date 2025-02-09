import { Routes, Route } from 'react-router-dom';



import Career from './component/Navbars/Career.jsx';

import Webdev from './component/course/Webdev.jsx';
import Frontend from './component/course/Frontend.jsx';


import PaymentSuccess from './component/payment-success/PaymentSuccess.jsx';




function App() {
    return (
        
            <div>
                <Routes>

               
                    

                    <Route path="/career" element={<Career />} />
                  
             
                    
                    <Route path="/webdev" element={<Webdev />} />
                    <Route path="/frontend" element={<Frontend />} />
                    
                    
                    
                    
                    
                   
                    <Route path="/paymentsuccess" element={<PaymentSuccess />} />
                    
                    
                    
                    
                </Routes>
            </div>
        
    );
}

export default App;
