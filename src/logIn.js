import React from 'react';
import TwitterLogoWhite from './twitterwhite.png';
import ReactDOM from 'react-dom';
import App from './main';

import './logIn.css';

const array = ['About', 'Help Center', 'Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Ads info', 'Blog', 'Status', 'Careers', 'Brand Resources', 'Advertising', 'Marketing', 'Twitter for Business', 'Developerss', 'Directory', 'Settings'];



const toggle = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
}

const Main = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className="left">
                    <img src={TwitterLogoWhite} alt="" />
                </div>
                <div className="right">
                    <div className="right-upper">
                        <input placeholder="Phone,email, or usern..."></input>
                        <p>Forgot password?</p>
                        <input placeholder="Password"></input>
                        <button onClick={toggle}>Log in</button>
                    </div>
                    <div className="right-inner">
                        <img src={TwitterLogoWhite} alt="" style={{ height: '2rem' }} />
                        <h1>Happening now</h1>
                        <h2>Join Twitter today</h2>
                        <button className="signupBtn">Sign up</button>
                        <button className="loginBtn">Log in</button>
                    </div>
                </div>
            </div>
            <footer>
                <div className="links">
                    {array.map((item) => {
                        return <p className="footer-links">{item}</p>;
                    })}
                </div>
                <p>&copy; 2021 Twitter, Inc.</p>
            </footer>
        </React.Fragment>
    );
}


export default Main;