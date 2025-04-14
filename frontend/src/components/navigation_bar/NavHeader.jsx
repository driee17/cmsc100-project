import React from 'react';
import './styles.css';


function NavHeader(){
    const accountName = localStorage.getItem('email');
    return (
        <nav>
            <div id="navLogo" onClick={() => window.location.href = '/store'}>
                <img
                className="fawwafawfaw"
                style={{width: '35px'}}
                src="https://i.pinimg.com/736x/ae/2d/38/ae2d380c1add5d956518ffc948bd99cf.jpg"
                />
                    PROJECT POKEMANS
            </div>
            <div id="navMenuButtonsGroup">
                <button className="navMenuButton" onClick={() => window.location.href = '/admin'}>
                        admin
                    </button>
                <button className="navMenuButton" onClick={() => window.location.href = '/cart'}>
                    Cart ([X] Items)
                </button>
                <button id="navAccount" className="navMenuButton" onClick={() => window.location.href = '/'}>
                    {accountName}
                </button>
            </div>
        </nav>
    );
}

export default NavHeader