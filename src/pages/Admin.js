import React from 'react';
import { useState, useEffect } from 'react';

//COMPONENTS
import UserDetails from '../components/UserDetails.js';

//STYLING
import { RuxTabs, RuxTab, RuxTabPanels, RuxTabPanel, RuxOption, RuxSelect } from '@astrouxds/react';
import {
    Box,
    Grid,
    LinearProgress
} from '@mui/material';

export default function AdminDashboard(){

    const [allUsers, setAllUsers] = useState(['test'])
    const [unassigned, setUnassigned] = useState(false)
    const [inbound, setInbound] = useState(false)
    const [sponsor, setSponsor] = useState(false)
    const [currentGuardianList, setCurrentGuardianList] = useState('');

    useEffect(function(){
        fetch(`${process.env.REACT_APP_API_URL}/users`)
        .then(response => response.json())
        .then(response => {
            setAllUsers([...response])
            setLists()
            console.log('litttle string', allUsers)
        })
        // .then(response => {
        //     console.log('allUsers', allUsers)
        //     console.log('response', response)
        //     return response
        // })
        // .then(response => {
        //     setLists()
        //     // setTimeout(() => console.log('log in fetch', unassigned, sponsor, inbound), 5000)
        // })
        // .then(console.log("unassigned:" unassigned "Inbound:" inbound "sponsor:" sponsor))
        .catch((err) => console.error(err))
    },[]);

    function unassignedRender (){

            return currentGuardianList !== 'unassigned_guardians' ? null : (
            <>
            <h3>Unassigned Guardians:</h3>
                <Grid container spacing={3} justifyContent="center">
                    {unassigned.map((i) => (
                        <>
                            <Grid item xs={8}>
                                <UserDetails rank={i.rank} first_name={i.first_name} last_name={i.last_name} work_email={i.work_email} phone_number={i.phone_number}/>
                            </Grid>
                        </>
                    ))}
                </Grid>
            </>
                )
    }

    function inboundRender(){

        return currentGuardianList !== 'inbound_guardians' ? null : (
            <>
            <h3>Inbound Guardians:</h3>
                <Grid container spacing={3} justifyContent="center">
                    {inbound.map((i) => (
                        <>
                            <Grid item xs={8}>
                                <UserDetails rank={i.rank} first_name={i.first_name} last_name={i.last_name} work_email={i.work_email} phone_number={i.phone_number}/>
                            </Grid>
                        </>
                    ))}
                </Grid>
            </>


        )
    }

    function sponsorRender(){

        return currentGuardianList !== 'sponsor_guardians' ? null : (
            <>
            <h3>Sponsor Guardians:</h3>
                <Grid container spacing={3} justifyContent="center">
                    {sponsor.map((i) => (
                        <>
                            <Grid item xs={8}>
                                <UserDetails rank={i.rank} first_name={i.first_name} last_name={i.last_name} work_email={i.work_email} phone_number={i.phone_number}/>
                            </Grid>
                        </>
                    ))}
                </Grid>
            </>
        )
    }



    function setLists() {
        console.log('set list started')
        const inboundArray = [];
        const sponsorArray = [];
        const unassignedArray =[]

        for (let i = 0; i < allUsers.length; i++){
            if (allUsers[i].sponsor_id){
                inboundArray.push(allUsers[i])
                console.log('inbound Array', inboundArray);
                // return setInbound(inboundArray)
            }
            if (allUsers[i].role === "sponsor"){
                sponsorArray.push(allUsers[i])
                console.log('Sponsor Array', sponsorArray)

            }
            if (allUsers[i].sponsor_id === null) {
                unassignedArray.push(allUsers[i])
                console.log('unassigned array', unassignedArray)
            }
        }

            setInbound(inboundArray)
            setSponsor(sponsorArray)
            setUnassigned(unassignedArray)
     }


     if(sponsor){console.log(sponsor)}

    return allUsers ? (
         <>
            <h2>Administrator page</h2>
            <br></br>
            <p>Please select a list in the drop down menu to view or make changes to any given member within it.</p>
            <Box data-testid="grid-container" sx={{ flexGrow: 1, paddingTop: 8, paddingBottom: 8 }}>
                <div className = 'userList'>
                    <RuxSelect label= "Select Guardian List" name="rank" id="rank" onRuxchange={(e) => setCurrentGuardianList(e.target.value)}>
                        <RuxOption value="" label = "select a list here..."></RuxOption>
                        <RuxOption value="unassigned_guardians" label="Unassigned Guardians"></RuxOption>
                        <RuxOption value="inbound_guardians" label ="Inbound Guardians"></RuxOption>
                        <RuxOption value="sponsor_guardians" label ="Sponsor Guardians"></RuxOption>
                   </RuxSelect>
                 </div>
                {unassignedRender()}
                {inboundRender()}
                {sponsorRender()}
                {/* {window.location.reload()} */}
            </Box>

        </>
    ) : (
        <div>Error loading</div>
    )
}


