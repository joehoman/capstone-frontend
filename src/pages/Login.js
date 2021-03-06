import {useState, useEffect} from 'react';
import React, { Link, useNavigate } from 'react-router-dom';
import { RuxButton, RuxInput, RuxSelect, RuxOption} from '@astrouxds/react'

export default function Login() {
const navigate = useNavigate();
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if(userInfo){
            navigate('/dashboard')
        }

    }, [])

    const [workEmail, setWorkEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const[loading, setLoading] = useState(false);
    const [wrongInfo, setWrongInfo] = useState(false)


    const submitHandler = async (e) => {

        e.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"work_email": workEmail, "password": password}),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            if(data.id){localStorage.setItem('userInfo', JSON.stringify(data))}
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="forms">
            <h1>Please Login</h1>
            <form className="login-form" onSubmit={submitHandler}>
                <div>
                    <RuxInput size="medium" type="email" label="Email" placeholder="Email@spaceforce.mil" onRuxinput={(e) => setWorkEmail(e.target.value)}/>
                </div>
                <div>
                    <RuxInput size="medium" label="Password" type="password"onRuxinput={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className = "submitBtn">Login</button>
            </form>



            <h2>Don't have an account?</h2>
            <form>
                <Link to="/register">
                    <button type="button" className = "submitBtn">Register Here</button>
                </Link>
            </form>
        </div>
    )

};
