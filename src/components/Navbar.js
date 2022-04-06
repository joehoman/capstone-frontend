import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar(){

    // const [userInfo, setUserInfo] = useState(localStorage.getItem("userInfo"))
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")))


    // inbound
    if (userInfo){
        // console.log(userInfo)
        if (userInfo.role === "inbound"){
        return(
            <>
            <div className = "topnav">
                <b>
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                        Dashboard
                    </Link>
                </b>
                <b>
                        Embark🚀
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

        if (userInfo.role === "sponsor"){
            return(
                <>
                <div className = "topnav">
                    {/* <b>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            Home
                        </Link>
                    </b> */}
                    <b>
                        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                            Dashboard
                        </Link>
                    </b>
                    <b>
                        Embark🚀
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

        // admin
        if (userInfo.role === "admin"){
            return(
                <>
                <div className = "topnav">
                    <b>
                        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                            Dashboard
                        </Link>
                    </b>
                    <b>
                    Embark🚀
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

                <div>
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
            </div>
            </>
        )
    }
}



export default Navbar;