
//This page lists users assigned to the logged in sponsor
import {useState, useEffect} from 'react';
import React, { Link, useNavigate, useLocation } from 'react-router-dom';

// need to post to tasks database for their inbound
// need to get all inbound
export default function AdminClickSponsor() {
    const navigate = useNavigate();
    const location = useLocation();
    const [inbounds, setInbounds] = useState(false)
    const [userInfo, setUserInfo] =useState(JSON.parse(localStorage.getItem("userInfo")))
    const [userClicked, setUserClicked] = useState(false)
    const [userClickedID, setUserClickedID] = useState()
    const [sponsorName, setSponsorName] = useState(`${location.state.sponsorObject.rank} ${location.state.sponsorObject.first_name} ${location.state.sponsorObject.last_name}`)



    useEffect(function(){
        fetch(`${process.env.REACT_APP_API_URL}/sponsor/user/${location.state.sponsorObject.id}`)
        .then(response => response.json())
        .then(response => setInbounds(response))
        .catch((err) => console.error(err))
},[]);

const clickHandler = (inboundObject) => {
    navigate("/assigned/inbound/details", {state:{inboundObject:inboundObject}})
}



if (inbounds){

    return (

        <div className="assignedWrapper">
            <div className="assignedWelcome">
                <h1>Welcome {userInfo.rank} {userInfo.lastName}</h1>
                <p>These Guardians are assigned to {sponsorName} This is your admin dashboard. Please select an inbound Guardian to review their information or assign them additional tasks.</p>
            </div>

            <h1 className = "header">{sponsorName}'s Inbounds</h1>
                {inbounds.map((i) => {
                    return(
                        <div className="assignedCard">
                            <>
                                <button onClick = {() => clickHandler(i)} className = "postButton" >
                                    <h4  >{`${i.rank} ${i.first_name} ${i.last_name}`} </h4>
                                </button>
                            </>
                        </div>

                    )
                })}

        </div>
    )

} else {
    return <h1>loading </h1>;
}
}