import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


export default function Checklist() {
    const navigate = useNavigate();

    const [tasks, setTasks] = useState(false)
    const [userInfo, setUserInfo] =useState(JSON.parse(localStorage.getItem("userInfo")))

     useEffect(function(){
            //fetch all tasks based on work email neex to add backend method and fix URL
            fetch(`${process.env.REACT_APP_API_URL}/tasks/user/${userInfo.id}`)
            .then(response => response.json())
            .then(response => setTasks([response]))
            .catch((err) => console.error(err))
    },[]);

    if (tasks !== false){

        return (
            <>
            <div className="column">
            <h2 className = "header">My Tasks</h2>
                {tasks[0].map((tasks, i) => {
                    return(
                        <li className="card">
                                <div  className = "task" >
                                    <h3> {tasks.task}</h3>
                                    <h4>Due date: {tasks.due_date} </h4>
                                </div>
                        </li>

                    )
                })}

            </div>
        </>
        )

    } else {
        return <h1> Internal Error </h1>;
    }
};