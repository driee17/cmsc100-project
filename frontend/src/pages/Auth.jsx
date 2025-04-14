import React from 'react';
import { LoginCard } from '../components';

const Auth = () => {
    return (
        <>
            <div className="body">
                <div id="loginPage">
                    <h1>Good day!</h1>
                    {/* <a href="/store">Temp - Go to store</a> */}
                    <LoginCard />
                </div>
            </div>
        </>
    );
    };

export default Auth;
