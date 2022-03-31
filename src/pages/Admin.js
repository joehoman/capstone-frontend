import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const [allUsers, setAllUsers] = useState([])
    const [unassigned, setUnassigned] = useState(false)
    const [inbound, setInbound] = useState(false)
    const [sponsor, setSponsor] = useState(false)
    const [currentGuardianList, setCurrentGuardianList] = useState('');

    useEffect(function(){
        fetch(`${process.env.REACT_APP_API_URL}/users`, {mode: "cors"})
        .then(response => response.json())
        .then(response => setAllUsers([...response]))
        .catch((err) => console.error(err))
    },[]);

    useEffect(() => {
        if(allUsers.length < 1) return

        let inboundArray = [];
        let sponsorArray = [];
        let unassignedArray =[];

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
            if (allUsers[i].sponsor_id === null && allUsers[i].role === "inbound" ) {
                unassignedArray.push(allUsers[i])
                console.log('unassigned array', unassignedArray)
            }
        }

        setInbound([...inboundArray])
        setSponsor([...sponsorArray])
        setUnassigned([...unassignedArray])


    }, [allUsers])

    const unassignedClickHandler = (inboundObject) => {
        navigate("/admin/unassigned/details", {state:{inboundObject:inboundObject}})
    }

     const inboundClickHandler = (inboundObject) => {
        navigate("/assigned/inbound/details", {state:{inboundObject:inboundObject}})
    }


     const sponsorClickHandler = (sponsorObject) => {
        navigate("/admin/sponsor/details", {state:{sponsorObject:sponsorObject}})
    }


    function unassignedRender (){

            return currentGuardianList !== 'unassigned_guardians' ? null : (
            <>
            <h3>Unassigned Guardians:</h3>
                <Grid justifyContent="center">
                    {unassigned.map((i) => (
                        <>
                            <Grid sx={{paddingTop: 2, paddingBottom: 2}} item xs={8} onClick = {() => unassignedClickHandler(i)}>
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
                <Grid justifyContent="center" >
                    {inbound.map((i) => (
                        <>
                            <Grid sx={{paddingTop: 2, paddingBottom: 2}} item xs={8} onClick = {() => inboundClickHandler(i)}>
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
                <Grid justifyContent="center">
                    {sponsor.map((i) => (
                        <>
                            <Grid sx={{paddingTop: 2, paddingBottom: 2}} item xs={8} onClick = {() => sponsorClickHandler(i)}>
                                <UserDetails rank={i.rank} first_name={i.first_name} last_name={i.last_name} work_email={i.work_email} phone_number={i.phone_number}/>
                            </Grid>
                        </>
                    ))}
                </Grid>
            </>
        )
    }

    return allUsers ? (

         <>
            <div className = "adminWrapper">
                <div className = "welcome">
                    <h2>Administrator page</h2>
                    <br></br>
                    <p>Please select a list in the drop down menu to view or make changes to any given member within it.</p>
                </div>
                <div className = "adminList">
                    <div className = 'userList'>
                        <RuxSelect label= "Select Guardian List" name="rank" id="rank" onRuxchange={(e) => setCurrentGuardianList(e.target.value)}>
                            <RuxOption value="" label = "select a list here..."></RuxOption>
                            <RuxOption value="unassigned_guardians" label="Unassigned Guardians"></RuxOption>
                            <RuxOption value="inbound_guardians" label ="Inbound Guardians"></RuxOption>
                            <RuxOption value="sponsor_guardians" label ="Sponsor Guardians"></RuxOption>
                        </RuxSelect>
                    </div>
                    <Box data-testid="grid-container" sx={{ flexGrow: 1, paddingTop: 8, paddingBottom: 8 }}>
                        {unassignedRender()}
                        {inboundRender()}
                        {sponsorRender()}

                     </Box>

                </div>
            </div>
        </>
    ) : (
        <div>Error loading</div>
    )
}


