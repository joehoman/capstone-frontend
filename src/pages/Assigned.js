//This page lists users assigned to the logged in sponsor

import React from 'react';
import UserDetails from '../components/UserDetails.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import {
    Box,
    Grid,
    LinearProgress
} from '@mui/material';

// need to post to tasks database for their inbound
// need to get all inbound
export default function Assigned() {
    const navigate = useNavigate();

    const [inbounds, setInbounds] = useState(false)
    const [userInfo, setUserInfo] =useState(JSON.parse(localStorage.getItem("userInfo")))
    const [userClicked, setUserClicked] = useState(false)
    const [userClickedID, setUserClickedID] = useState()



    useEffect(function(){
        //fetch all tasks based on work email neex to add backend method and fix URL
        fetch(`${process.env.REACT_APP_API_URL}/sponsor/user/${userInfo.id}`, {mode: "cors"})
        .then(response => response.json())
        .then(response => setInbounds(response))
        .catch((err) => console.error(err))
},[]);

const clickHandler = (inboundObject) => {
    navigate("/assigned/inbound/details", {state:{inboundObject:inboundObject}})
}



if (inbounds){

    return (

        <div className="column">
            <div className="welcome">
                <h1>Welcome {userInfo.rank} {userInfo.lastName}</h1>
                <p>This is your sponsor dashboard. Please select an inbound Guardian to review their information or assign them additional tasks.</p>
            </div>

            <h1 className = "header">My Inbounds</h1>
                {inbounds.map((i) => {
                    return(
                        <>
                        <Box data-testid="grid-container" sx={{ flexGrow: 1 }}>
                            <Grid sx={{paddingTop: 2, paddingBottom: 2}} item xs={8} onClick = {() => clickHandler(i)}>
                                <UserDetails rank={i.rank} first_name={i.first_name} last_name={i.last_name} work_email={i.work_email} phone_number={i.phone_number}/>
                            </Grid>
                        </Box>

                    </>


                    )
                })}

        </div>
    )

} else {
    return <h1>loading </h1>;
}
}