import React from 'react';
// import './pages.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Logout (){
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.clear();
        navigate('/')
        window.location.reload();

    }, [])

    return(
   <h1>
       Logging Out
   </h1>
    )

};