import React from 'react';
import { useState, useEffect } from 'react';

//Components
import UserDetails from '../components/UserDetails.js';
import InboundChecklist from '../components/InboundChecklist'

//STYLING
import { styled } from '@mui/material/styles';
import {
    Box,
    Grid,
    LinearProgress
} from '@mui/material';


export default function Inbound() {

    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")))
    const [sponsorInfo, setSponsorInfo] = useState(false);


    useEffect(function(){
        if (userInfo.sponsorID !== null){
        fetch(`${process.env.REACT_APP_API_URL}/sponsor/${userInfo.sponsorID}`)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => setSponsorInfo(response[0]))
        .catch((err) => console.error(err))
        }
    }, []);

    return sponsorInfo !== false ? (
        <>
        <div className="inboundWrapper">
            <div className="inboundLeft">
                <div className="welcome">
                    <h2>Welcome {userInfo.rank} {userInfo.lastName}</h2>
                    <p>This is your inbound dashboard. Please navigate through your in-processing checklist.
                        For any additional information, please reach out to your sponsor with any questions you may have.</p>
                </div>
                <div className="inboundSponsor">
                    <h3>Sponsor Details:</h3>
                    <Box data-testid="grid-container" sx={{ flexGrow: 1, paddingTop: 2, paddingBottom: 5 }}>
                        <Grid container spacing={3} justifyContent="left">
                            <Grid item xs={8}>
                                <UserDetails rank={sponsorInfo.rank} first_name={sponsorInfo.first_name} last_name={sponsorInfo.last_name} work_email={sponsorInfo.work_email} phone_number={sponsorInfo.phone_number} />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
            <div className="inboundTasks">
                <InboundChecklist />
            </div>
        </div>
        </>
    ) : (
        <>
        <div className="inboundWrapper">
            <div className="inboundLeft">
                <div className="welcome">
                    <h2>Welcome {userInfo.rank} {userInfo.lastName}</h2>
                    <p>This is your inbound dashboard. Please navigate through your in-processing checklist.
                    For any additional information, please reach out to your sponsor with any questions you may have.</p>
                </div>
                <div className="inboundSponsor">
                    <h3>Sponsor Details:</h3>
                    Sponsor has yet to be assigned
                </div>
            </div>
            <div className="inboundTasks">
                <InboundChecklist />
            </div>
        </div>
        </>
        )
    }
