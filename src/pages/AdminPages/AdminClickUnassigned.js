//This page lists the tasks of a user assigned to the signed in sponsor

import {useState, useEffect} from 'react';
import React, { Link, useNavigate, useLocation } from 'react-router-dom';


// export default function AdminClickUnassigned(){

    const location = useLocation();
    const navigate = useNavigate();
    //used for passing object through router

    // const [inboundName, setInboundName] = useState(`${location.state.inboundObject.rank} ${location.state.inboundObject.first_name} ${location.state.inboundObject.last_name}`)
    //sets inbound name and rank from object passed through router so it's easier to call when styling


    // const [inboundObject, setInboundObject] = useState({id:10,rank:Specialist 2,first_name:wild,last_name:wild,work_email:wild,personal_email:asdf,phone_number:asdf,hashed_password:$2a$12$PE3HwXT2yZ783RW7NlZ/TOJNhwqhKL6BE5XZS2IXBO91D0f7JIm9i,role:inbound,sponsor_id:null})
    // //used for testing
    //will switch all instances of this to location.state.inboundObject.

//gets all sponsors
    useEffect(function(){
        //fetch all tasks based on work email neex to add backend method and fix URL
        fetch(`${process.env.REACT_APP_API_URL}/admin/getsponsors`)
        .then(response => response.json())
        .then(response => setInbounds(response))
        .catch((err) => console.error(err))
    },[]);


//change to patching

    // function patchHandler(e){
    //    e.preventDefault()
    //     fetch(`${process.env.REACT_APP_API_URL}/sponsor/addtask`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({"user_id": location.state.inboundObject.id, "task": description, "due_date": dueDate, "task_status": false}),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Success', data);
    //         window.location.reload()
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
    // };



//don't need to conditioinally render
        //only render once fetch is complete

        return (
            <div className="row">
            <div className="column">
            <h1 className = "header"> Clicked User's Contact Info</h1>
            <p>{inboundObject.work_email}</p>
            <p>{inboundObject.personal_email}</p>
            <p>{inboundObject.phone_number}</p>
{/*
change to assigning sponsor */}
            <h1>Add A Sponsor to Clicked User</h1>
            {sponsors[0].map((i) => {
                    return(
                        <li className="card">
                            <>
                                <button onClick = {() => patchHandler(inbounds)} className = "postButton"    >
                                    <h4 >{i.rank} </h4>
                                    <h4 >{i.first_name} </h4>
                                    <h4 >{i.last_name} </h4>
                                </button>
                            </>
                        </li>
                    ) }
                )}
            </div>
        </div>
        )
}

