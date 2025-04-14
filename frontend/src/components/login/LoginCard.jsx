import React, { useState, useEffect } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

function LoginCard() {
    const [users, setUsers] = useState([])
    const [isLogin, setIsLogin] = useState(true); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fname, setfName] = useState('');
    const [mname, setmName] = useState('');
    const [lname, setlName] = useState('');
    const [userType, setUserType] = useState('customer');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`http://localhost:3001/register`);
                if (!response.ok) {
                    throw new Error(`Error fetching users: ${response.statusText}`);
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    // Toggle between login and signup forms
    const toggleForm = (formType) => setIsLogin(formType === 'login');

    const setUser = (e, value) => {
        e.preventDefault();
        setUserType(value);
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            try {
                const response = await fetch('http://localhost:3001/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });
                if (!response.ok) {
                    throw new Error(`Error authentication: ${response.statusText}`);
                }
                localStorage.setItem('email', email);
                navigate("/store");
            } catch (error) {
                console.error('Error logging in:', error);
                alert('Login Failed. Please try again.');
            }
        } else {
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            try {
                const response = await fetch('http://localhost:3001/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ fname, mname, lname, userType, email, password }),
                });
                if (!response.ok) {
                    throw new Error(`Error signing up: ${response.statusText}`);
                }
                alert('New account created! Redirecting to store page...');
                localStorage.setItem('email', email);
                navigate("/store");
            } catch (error) {
                console.error('Error signing up:', error);
                alert('Sign Up Failed. Please try again.');
            }
        }
    };

    return (
        <div className='loginCard'>
            <div className='loginSignupSegmented'>
                <button 
                    className={`segmentedBtn ${isLogin ? 'active' : ''}`}
                    onClick={() => toggleForm('login')}
                >
                    Log in
                </button>
                <button 
                    className={`segmentedBtn ${!isLogin ? 'active' : ''}`}
                    onClick={() => toggleForm('signup')}
                >
                    Sign up
                </button>
            </div>

            <div className='loginForm'>
                <form onSubmit={handleSubmit}>

                    {!isLogin && (
                        <>
                        <div className='formGroup'>
                            <label htmlFor='firstName'>First Name</label>
                            <input 
                                type='text' 
                                id='firstName' 
                                value={fname} 
                                onChange={(e) => setfName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor='middleName'>Middle Name</label>
                            <input 
                                type='text' 
                                id='middleName' 
                                value={mname} 
                                onChange={(e) => setmName(e.target.value)} 
                            />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor='lastName'>Last Name</label>
                            <input 
                                type='text' 
                                id='lastName' 
                                value={lname} 
                                onChange={(e) => setlName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor='lastName'>I am a...</label>
                            <div id='userType'>
                                <button 
                                    className={`segmentedBtn ${userType == 'customer' ? 'active' : ''}`}
                                    onClick={(e) => setUser(e, 'customer')}
                                >
                                    Customer
                                </button>
                                <button 
                                    className={`segmentedBtn ${userType == 'merchant' ? 'active' : ''}`}
                                    onClick={(e) => setUser(e, 'merchant')}
                                >
                                    Merchant
                                </button>
                            </div>
                        </div>
                        </>
                    )}

                    <div className='formGroup'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email' 
                            id='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className='formGroup'>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type='password' 
                            id='password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>

                    {!isLogin && (
                        <div className='formGroup'>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <input 
                                type='password' 
                                id='confirmPassword' 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                required 
                            />
                        </div>
                    )}

                    <button type='submit' className='submitBtn'>
                        {isLogin ? 'Log in' : 'Sign up'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginCard;
