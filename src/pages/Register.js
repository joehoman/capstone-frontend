import React from 'react';
// import './pages.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RuxButton, RuxInput, RuxSelect, RuxOption} from '@astrouxds/react'
// import { REACT_APP_API_URL } from

export default function Register (){

    const navigate = useNavigate();

    //if someone is logged in they will be sent to the homepage

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rank, setRank] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [workEmail, setWorkEmail] = useState("")
    const [role, setRole] = useState("")

    //will implement error handling later
    const [error, setError] = useState(false);
    const[loading, setLoading] = useState(false);
    // const urlObject = {production: "https://capstone-backend-ussf.herokuapp.com",development: "http://localhost:8080"}
    // const url = urlObject[process.env.NODE_ENV || "development"] //create stateful value in a sitecontext page

    const submitHandler = async (e) => {
        e.preventDefault()

        // fetch(`${process.env.REACT_APP_API_URL}/register`, {
        fetch(`http://localhost:8080/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"password": password, "rank": rank, "role": role, "first_name": firstName, "last_name":lastName, "work_email":workEmail}),
        })
        // .then(response => response.json())
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            //check to see if response data has token
            localStorage.setItem('userInfo', JSON.stringify(data))
        })
        .then(navigate('/login'))
        .catch((error) => {
            console.error('Error:', error);
        });
    };


    return(
    <div className="forms">
        <h1>Register Your Account</h1>
            <form className='register-form' onSubmit={submitHandler}>
                <div>
                    <RuxInput  size="large" type="text" label="Email" placeholder="Email@spaceforce.mil" onRuxinput={(e) => setWorkEmail(e.target.value)}/>
                </div>

                <div>
                    <RuxInput label="Password" type="password" onRuxinput={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <RuxInput label = "First Name" type="text" onRuxinput={(e) => setFirstName(e.target.value)}/>
                </div>

                <div>
                    <RuxInput label = "Last Name" type="text" onRuxinput={(e) => setLastName(e.target.value)}/>
                </div>

                <div className = 'rankRegister'>
                    <RuxSelect label= "Rank" name="rank" id="rank" onRuxchange={(e) => setRank(e.target.value)}>
                        <RuxOption value=" " label = " "> </RuxOption>
                        <RuxOption value="Spc 1" label="Specialist 1"></RuxOption>
                        <RuxOption value="Spc 2" label ="Specialist 2"> </RuxOption>
                        <RuxOption value="Spc 3" label ="Specialist 3"> </RuxOption>
                        <RuxOption value="Spc 4"label ="Specialist 4"> </RuxOption>
                        <RuxOption value="Sgt" label="Sergeant"></RuxOption>
                        <RuxOption value="TSgt" label ="Technical Sergeant"> </RuxOption>
                        <RuxOption value="MSgt" label ="Master Sergeant"> </RuxOption>
                        <RuxOption value="SMSgt" label ="Senior Master Sergeant"> </RuxOption>
                        <RuxOption value="CMSgt" label ="Chief Master Sergeant"></RuxOption>
                   </RuxSelect>
                 </div>

                 <div>
                    <RuxSelect label="Role" name="role" id="role" onRuxchange={(e) => setRole(e.target.value)}>
                        <RuxOption value="" label=""> </RuxOption>
                        <RuxOption value="inbound" label ="Inbound"> </RuxOption>
                        <RuxOption value="sponsor" label = "Sponsor"> </RuxOption>
                    </RuxSelect>
                </div>
                <div>
                    <p>
                    <button type="submit" className = "submitBtn">Create Account</button>
                    </p>
                </div>
            </form>
    </div>
    )

};