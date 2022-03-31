//This page lists the tasks of a user assigned to the signed in sponsor

import {useState, useEffect} from 'react';
import React, { Link, useNavigate, useLocation } from 'react-router-dom';


export default function AdminClickUnassigned(){

    const location = useLocation();
    const navigate = useNavigate();
    const [sponsors, setSponsors] = useState(false)
    const [inboundName, setInboundName] = useState(`${location.state.inboundObject.rank} ${location.state.inboundObject.first_name} ${location.state.inboundObject.last_name}`)
    //used for passing object through router

    // const [inboundName, setInboundName] = useState(`${location.state.inboundObject.rank} ${location.state.inboundObject.first_name} ${location.state.inboundObject.last_name}`)
    //sets inbound name and rank from object passed through router so it's easier to call when styling


    // const [inboundObject, setInboundObject] = useState({id:10,rank:Specialist 2,first_name:wild,last_name:wild,work_email:wild,personal_email:asdf,phone_number:asdf,hashed_password:$2a$12$PE3HwXT2yZ783RW7NlZ/TOJNhwqhKL6BE5XZS2IXBO91D0f7JIm9i,role:inbound,sponsor_id:null})
    // //used for testing
    //will switch all instances of this to location.state.inboundObject.

//gets all sponsors
    useEffect(function(){
        fetch(`${process.env.REACT_APP_API_URL}/admin/getsponsors`)
        .then(response => response.json())
        .then(response => setSponsors(response))
        .catch((err) => console.error(err))
    },[]);

    function patchHandler(i){
       console.log('should be clicked on sponsor', i)
        fetch(`${process.env.REACT_APP_API_URL}/admin/sponsorid`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"sponsor_id": i.id , "id": location.state.inboundObject.id}),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
        })
        .then(navigate('/dashboard'))
        .catch((error) => {
            console.error('Error:', error);
        });
    };



    if (sponsors !== false) {
        console.log('sponsors;', sponsors)
        console.log('state', location.state.inboundObject)

        return (

            <div className="column">
            <div className="row">
                <h1 className = "header"> {inboundName}'s' Contact Info</h1>
                <p>{location.state.inboundObject.work_email}</p>
                <p>{location.state.inboundObject.personal_email}</p>
                <p>{location.state.inboundObject.phone_number}</p>


            <h2>Clicking a Sponsor Will Assign Them To {inboundName} </h2>
            {sponsors.map((i) => {
                    return(
                        <ul className="card">
                            <>
                                <button onClick = {() => patchHandler(i)} className = "postButton"    >
                                    <h4 >{i.rank} </h4>
                                    <h4 >{i.first_name} </h4>
                                    <h4 >{i.last_name} </h4>
                                </button>
                            </>
                        </ul>
                    ) }
                )}
        </div>
        </div>
        )
                    }
        else{return <h1>Internal Error</h1>}
}

