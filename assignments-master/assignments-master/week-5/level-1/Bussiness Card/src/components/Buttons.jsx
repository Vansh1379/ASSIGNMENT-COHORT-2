import React from 'react';
import "./Buttons.css"
export function Button() {
    const redirectToLinkedin = () => {
        window.location.href = "https://www.linkedin.com/in/vansh-kalra-971b5a247/";
    };
    const RedirectToTwitter = () => {
        window.location.href = "https://twitter.com/VanshKalra1379";
    };
    return (
        <div className='Buttons'>
            <button onClick={redirectToLinkedin} className='Linkedin'>Linekdin</button>
            <button onClick={RedirectToTwitter} className='Twitter'>Twitter</button>
        </div>
    );
}