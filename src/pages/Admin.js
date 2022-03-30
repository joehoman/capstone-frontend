import React from 'react';
import { useState, useEffect } from 'react';
// import { RuxTabs, RuxTab, RuxTabPanels, RuxTabPanel } from '@astrouxds/react';
import UserDetails from '../components/UserDetails.js';

import {
    Box,
    Grid,
    LinearProgress
} from '@mui/material';

export default function AdminDashboard(){

    const [allUsers, setAllUsers] = useState(false)
    const [unassigned, setUnassigned] = useState(false)
    const [inbound, setInbound] = useState(false)
    const [sponsor, setSponsor] = useState(false)

    useEffect(function(){
        fetch(`${process.env.REACT_APP_API_URL}/users`)
        .then(response => response.json())
        .then(response => setAllUsers(response))
        .then(setLists())
        // .then(console.log("unassigned:" unassigned "Inbound:" inbound "sponsor:" sponsor))
        .catch((err) => console.error(err))
    },[]);



    function setLists() {
        const inboundArray = [];
        const sponsorArray = [];
        const unassignedArray =[];

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
            <h2>admin page</h2>
            <Box data-testid="grid-container" sx={{ flexGrow: 1, paddingTop: 8, paddingBottom: 8 }}>
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
                <h3>Sponsored Guardians:</h3>
                <Grid container spacing={3} justifyContent="center">
                    {sponsor.map((i) => (
                        <>
                            <Grid item xs={8}>
                                <UserDetails rank={i.rank} first_name={i.first_name} last_name={i.last_name} work_email={i.work_email} phone_number={i.phone_number}/>
                            </Grid>
                        </>
                    ))}
                </Grid>
            </Box>

        </>
    ) : (
        <div>Error loading</div>
    )
}

        // <div style="display: flex; flex-flow: column;">
        //     <div style="border: rgba(255,255,255, .25) dashed 1px; margin: 1vw 1vw 0; padding: 2px;">
        //         <RuxTabs id="tab-set-id-2" small="">
        //             <RuxTab id="tab-id-2-1">Unassigned</RuxTab>
        //             <RuxTab id="tab-id-2-2">Inbound</RuxTab>
        //             <RuxTab id="tab-id-2-2">Sponsors</RuxTab>
        //             <RuxTab id="tab-id-2-3" disabled="">Tab 3 (disabled)</RuxTab>
        //         </RuxTabs>
        //             <RuxTabPanels aria-labelledby="tab-set-id-2">
        //              <RuxTabPanel aria-labelledby="tab-id-2-1">
        //                 <pre style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;">&lt;<span>!-- Small tab 1 HTML content --</span>&gt;</pre>
        //             </RuxTabPanel>
        //             <RuxTabPanel aria-labelledby="tab-id-2-2">
        //                 <pre style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;">&lt;<span>!-- Small tab 2 HTML content --</span>&gt;</pre>
        //             </RuxTabPanel>
        //             <RuxTabPanel aria-labelledby="tab-id-2-3">
        //                 <pre style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;">&lt;<span>!-- Small tab 3 HTML content --</span>&gt;</pre>
        //             </RuxTabPanel>
        //         </RuxTabPanels>
        //     </div>
        // </div>

//         <div style={"display": flex "flex-flow": column}>
//     <div style={"border": rgba(255,255,255, .25) dashed 1px; "margin": 1vw 1vw 0; "padding": 2px;}>
//         <rux-tabs id="tab-set-id-2" small="">
//             <rux-tab id="tab-id-2-1">Tab 1</rux-tab>
//             <rux-tab id="tab-id-2-2">Tab 2</rux-tab>
//             <rux-tab id="tab-id-2-3" disabled="">Tab 3 (disabled)
//             </rux-tab>
//         </rux-tabs>
//         <rux-tab-panels aria-labelledby="tab-set-id-2">
//             <rux-tab-panel aria-labelledby="tab-id-2-1">
//                 <pre style={"padding:" 1vw; "border": rgba(255,255,255, .15) dashed 1px; "margin:" 0;}>&lt;<span>!-- Small tab 1 HTML content --</span>&gt;</pre>
//             </rux-tab-panel>
//             <rux-tab-panel aria-labelledby="tab-id-2-2">
//                 <pre style={"padding:" 1vw; "border": rgba(255,255,255, .15) dashed 1px; "margin:" 0;}>&lt;<span>!-- Small tab 2 HTML content --</span>&gt;</pre>
//             </rux-tab-panel>
//             <rux-tab-panel aria-labelledby="tab-id-2-3">
//                 <pre style={"padding:" 1vw; "border": rgba(255,255,255, .15) dashed 1px; "margin:" 0;}>&lt;<span>!-- Small tab 3 HTML content --</span>&gt;</pre>
//             </rux-tab-panel>
//         </rux-tab-panels>
//     </div>
// </div>
    // )
// }