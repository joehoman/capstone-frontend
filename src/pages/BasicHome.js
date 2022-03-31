import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RuxButton, RuxInput, RuxSelect, RuxOption} from '@astrouxds/react'

const userInfo = localStorage.getItem("userInfo");

export default function () {

    // if ()
    return (
        <>
        <div className="homePage">
            <div className ="homeWelcome">
                <h2>Welcome to Embark</h2>
                <h3> This will site will help you navigate through your journey as an inbound Guardian. Embark will help you organize your PCS to provide a central and trackable way to in-process. </h3>
            </div>
            {/* <div className = "homeWrap"> */}
                <div className ="homeSponsor">
                    <h3> Guardians, please login to access your account. </h3>
                    <Link to="/login">
                        <RuxButton type="button" >Login</RuxButton>
                    </Link>


                </div>
                <div class = 'homeInbound'>
                    <h3> Unregistered Guardians, please sign up to get your sponsor's contact information and start working on your in-processing checklist. To recieve sponsor status, contact your CSS.</h3>
                    <Link to="/register">
                        <RuxButton type="button" >Sign Up</RuxButton>
                    </Link>
                </div>
            {/* </div> */}
        </div>
        </>
    )
}