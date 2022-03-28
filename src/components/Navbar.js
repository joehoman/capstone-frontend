import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar(){

    // const [userInfo, setUserInfo] = useState(localStorage.getItem("userInfo"))
    const [userInfo, setUserInfo] = useState('test')


    // inbound
    if (userInfo.privilege_level === 0){
        return(
            <>
            <div className = "topnav">
                <b>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        Home
                    </Link>
                </b>
                <b>
                    <Link to="/checklist" style={{ textDecoration: 'none' }}>
                        Checklist
                    </Link>
                </b>
                <b>
                    <Link to="/logout" style={{ textDecoration: 'none' }}>
                        Logout
                    </Link>
                </b>
            </div>
            </>
        )
    }

    //sponsor
    if (userInfo.privilege_level === 1){
        return(
            <>
            <div className = "topnav">
                <b>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        Home
                    </Link>
                    <Link to="/assigned" style={{ textDecoration: 'none' }}>
                        Assigned
                    </Link>
                    <Link to="/logout" style={{ textDecoration: 'none' }}>
                        Logout
                    </Link>
                </b>
            </div>
            </>
        )
    }

    //css
    if (userInfo.privilege_level === 2){
        return(
            <>
            <div className = "topnav">
                <b>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        Home
                    </Link>
                </b>
            </div>
            </>
        )
    }

    //user isn't logged in
    else {
        return(
            <>
            <div className = "topnav">
                <b>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        Home
                    </Link>
                </b>
                <b>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        Register
                    </Link>
                </b>
                <b>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        Login
                    </Link>
                </b>
            </div>
            </>
        )
    }
}

export default Navbar;