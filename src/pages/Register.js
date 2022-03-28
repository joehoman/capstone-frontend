import React from 'react';
// import './pages.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register (){

    const navigate = useNavigate();

    //if someone is logged in they will be sent to the homepage
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        if(userInfo){
            navigate('/')
        }
    }, [])


    const [username, setUsername] = useState("")
    const [hashedPassword, setHashedPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [workEmail, setWorkEmail] = useState("")

    //will implement error handling later
    const [error, setError] = useState(false);
    const[loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"username": username, "hashed_password": hashedPassword, "first_name": firstName, "last_name":lastName, "work_email":workEmail }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            //check to see if response data has token
            localStorage.setItem('userInfo', JSON.stringify(data))
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };


    return(
    <div className="forms">
        <h1>Register Your Account</h1>
            <form className='register-form' onSubmit={submitHandler}>
                <p>
                    <label>Username:</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                </p>
                <p>
                    <label >Password:</label>
                    <input type="password" onChange={(e) => setHashedPassword(e.target.value)}/>
                </p>
                <p>
                    <label >First Name:</label>
                    <input type="text" input onChange={(e) => setFirstName(e.target.value)}/>
                </p>
                <p>
                    <label>Last Name:</label>
                    <input type="text" input onChange={(e) => setLastName(e.target.value)}/>
                </p>
                <p>
                    <label>Work Email:</label>
                    <input type="text" input onChange={(e) => setWorkEmail(e.target.value)}/>
                </p>
                <button type="submit" className = "submitBtn">Create Account</button>
            </form>
    </div>
    )

};