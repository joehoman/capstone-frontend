//This page lists the tasks of a user assigned to the signed in sponsor

import {useState, useEffect} from 'react';
import React, { Link, useNavigate, useLocation } from 'react-router-dom';
import { RuxButton, RuxInput, RuxSelect, RuxOption} from '@astrouxds/react'


export default function ViewChecklist(){

    const location = useLocation();
    const navigate = useNavigate();
    //used for passing object through router

    const [tasks, setTasks] = useState(false)
    //holds tasks fetched from clicked on user

    const [inboundName, setInboundName] = useState(`${location.state.inboundObject.rank} ${location.state.inboundObject.first_name} ${location.state.inboundObject.last_name}`)
    //sets inbound name and rank from object passed through router so it's easier to call when styling

    const [description, setDescription] = useState("")
    const [dueDate, setDueDate] = useState("")
    //sets description/duedate of added task

    const[sponsor, setSponsor] = useState(false)

     useEffect(function(){
            fetch(`${process.env.REACT_APP_API_URL}/tasks/user/${location.state.inboundObject.id}`, {mode: "cors"})
            .then(response => response.json())
            .then(response => setTasks(response))
            .catch((err) => console.error(err))
    },[]);
    //fetches all tasks for user that was clicked on and sets Tasks


    useEffect(function(){
        fetch(`${process.env.REACT_APP_API_URL}/users/sponsor/${location.state.inboundObject.sponsor_id}`, {mode: "cors"})
        .then(response => response.json())
        .then(response => setSponsor(response))
        .catch((err) => console.error(err))
},[]);
    //fetches sponsor's name


    function taskHandler(e){
       e.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/sponsor/addtask`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"user_id": location.state.inboundObject.id, "task": description, "due_date": dueDate, "task_status": false}),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            window.location.reload()
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    if (tasks !== false && sponsor !== false){
        console.log(sponsor)

        return (
            <div className="inboundWrapper">
                 <div className="inboundLeft">
                    <div className="welcome">
                        <h1 className = "header">{`${inboundName}'s`} Contact Info</h1>
                        <p>{location.state.inboundObject.work_email}</p>
                        <p>{location.state.inboundObject.personal_email}</p>
                        <p>{location.state.inboundObject.phone_number}</p>
                        <p>Sponsor: {sponsor[0].rank} {sponsor[0].last_name}</p>
                    </div>


                    {/* <div className="forms"> */}
                        <div className = "checklist-form">
                            <h2>Add Task</h2>
                            <form onSubmit={taskHandler}>
                                <div>
                                    <RuxInput label="Task Description" onRuxinput={(e) => setDescription(e.target.value)} type="text" />
                                </div>
                                <div>
                                    <RuxInput label="Due Date" placeholder="DD/MM/YY" onRuxinput={(e) => setDueDate(e.target.value)} type="text" />
                                </div>
                                    <button type="submit" className = "submitBtn">Add</button>
                            </form>
                        </div>
                    {/* </div> */}
                </div>
                <div className="inboundTasks">
                    <h2 className = "header">{`${inboundName}'s`} Tasks</h2>
                        {tasks.map((tasks, i) => {
                            return(
                                <div className = "task" >
                                    <h3>{tasks.task}</h3>
                                    <h4 >Due Date: {tasks.due_date} </h4>
                                </div>
                            )}
                        )}
                    </div>
            </div>
        )
    } else {
        return <h1> Loading </h1>;
    }
}


