import react, { useState } from 'react';
import './loginandsignup.css';

const LoginAndSignUp = () => {
    const [action, setAction] = useState('Signup');




    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ?<div></div> :<div className="input">
                    <img src="" alt="" />
                    <input type="text" placeholder='Name' />
                </div>}
                
                <div className="input">
                    <img src="" alt="" />
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input">
                    <img src="" alt="" />
                    <input type="password" placeholder='Password' />
                </div> 
            </div>
            {action === "Signup" ? <div></div>: <div className="forgot-password">lost your password? <span>Click Here</span> </div>}

           
            <div className="submit-container">
                <div className={action === 'Login' ? 'submit gray' : "submit"} onClick={() => setAction('Signup')}  >Signup</div>
                <div className={action === 'Signup' ? 'submit gray' : "submit"} onClick={() => setAction('Login')}>Login</div>
            </div>
        

        </div>

    );
}

export default LoginAndSignUp;