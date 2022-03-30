import {useState, useEffect} from 'react';
import React, { Link, useNavigate } from 'react-router-dom';
import { RuxButton, RuxInput, RuxSelect, RuxOption} from '@astrouxds/react'

export default function Login() {
const navigate = useNavigate();
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if(userInfo){
            navigate('/dashboard')
        }

    }, [])

    const [workEmail, setWorkEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const[loading, setLoading] = useState(false);


    const submitHandler = async (e) => {

        e.preventDefault()
        // fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
        fetch(`http://localhost:8080/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"work_email": workEmail, "password": password}),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            localStorage.setItem('userInfo', JSON.stringify(data))
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="forms">
            <h1>Please Login</h1>
            <form className="login-form" onSubmit={submitHandler}>
                <p>

                    <RuxInput size="large" type="text" label="Email" placeholder="Email@spaceforce.mil" onRuxinput={(e) => setWorkEmail(e.target.value)} type="text" />
                </p>
                <p >

                    <RuxInput label="Password" type="password"onRuxinput={(e) => setPassword(e.target.value)} />
                </p>
                <button type="submit" className = "submitBtn">Login</button>
            </form>

            <h2>Don't have an account?</h2>
            <form>
                <Link to="/register">
                    <button type="button" className = "submitBtn">Register Here</button>
                </Link>
            </form>
        </div>
    )

};
// //Login button immediatly links to routes (w/o verfication)

// import React from 'react';
// import { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// // import { SiteContext } from '../context/SiteData'

// //PAGE IMPORTS
// import Register from './Register.js';
// // import Blogs from './Blogs.js';

// //Component Imports
// import NavBar from '../components/Navbar';



// export default function Login () {
//     // const {currentUser, setCurrentUser} = useContext(SiteContext)
//     let navigate = useNavigate();


//     function sendLogin(e){
//         e.preventDefault()

//         let username = e.target.form[0].value;
//         let password = e.target.form[1].value;
//         // console.log('username', username)
//         // console.log('password', password)


//         fetch(`${process.env.REACT_APP_API_URL}/login`, {
//              headers : {
//                  'Content-Type': 'application/json',
//                  'Accept': 'application/json'
//             },
//              method: "POST",
//              body: JSON.stringify({
//                username: username,
//                password: password
//              })
//          })
//          .then((res) => res.json())
//         //  .then(data => )
//         //  .then(data => setCurrentUser(data))
//         //  .then(navigate("/myblogposts"))
//          .catch((err) => console.log(err))
//      };

//     return(

//         <div className="forms">

//             <h1>Please Login</h1>
//             <form className="login-form">
//                 <p>
//                     <label>Username:</label>
//                     <input htmlFor="username" type="text" />
//                 </p>
//                 <p>
//                     <label>Password:</label>
//                     <input htmlFor="username" type="password" />
//                 </p>
//                     <button onClick={e => sendLogin(e)} type="submit" className = "submitBtn">Login</button>
//             </form>

//             <h2>Don't have an account?</h2>
//             <form>
//                 <Link to="/register" element={<Register />}>
//                     <button type="button" className = "submitBtn">Register Here</button>
//                 </Link>
//             </form>
//         </div>
//     )

// };




// import React, {useState, useEffect} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

// //STYLING
// import { styled } from '@mui/material/styles';
// import {
//     Box,
//     Grid,
//     LinearProgress,
//     Avatar,
//     Button,
//     CssBaseline,
//     FormControl,
//     FormControlLabel,
//     Checkbox,
//     Input,
//     InputLabel,
//     LockOutlinedIcon,
//     Paper,
//     Typography,
//     withStyles
// } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import withStyles from '@material-ui/core/styles/withStyles';

// export default function Login() {
// const navigate = useNavigate();
//     useEffect(() => {
//         const userInfo = localStorage.getItem("userInfo");

//         if(userInfo){
//             navigate('/')
//         }


//     }, [])

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(false);
//     const[loading, setLoading] = useState(false);


//     const submitHandler = async (e) => {
//         console.log('asdf', e)

//         e.preventDefault()
//         fetch(`${process.env.REACT_APP_API_URL}/login`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({"username": username, "password": password}),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success', data);
//             localStorage.setItem('userInfo', JSON.stringify(data))
//             window.location.reload();
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     };

//     function SignIn(props) {
//         const { classes } = props;


//     return (
//         <main className={classes.main}>
//             <CssBaseline />
//             <Paper className={classes.paper}>
//                 <Avatar className={classes.avatar}>
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                     Please Login
//                 </Typography>
//             {/* <form className={classes.login-form} onSubmit={submitHandler}> */}
//                 <FormControl margin="normal" required fullWidth>
//                     <InputLabel htmlFor="username"> Username: </InputLabel>
//                     <Input id="username" name="username" autoComplete="username" autoFocus onChange={(e) => setUsername(e.target.value)} type="text" />
//                 </FormControl>
//                 <FormControl margin="normal" required fullWidth>
//                     <InputLabel htmlFor="password">Password</InputLabel>
//                     <Input name="password" type="password" id="password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
//                 </FormControl>
//                 <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     color="primary"
//                     className={classes.submit}
//                 >
//                     Sign in
//                 </Button>
//             {/* </form> */}
//             </Paper>
//             <h2>Don't have an account?</h2>
//             {/* <form> */}
//                 <Link to="/register">
//                     <button type="button" className = "submitBtn">Register Here</button>
//                 </Link>
//             {/* </form> */}
//         </main>
//     );

// };

// SignIn.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };


// const styles = theme => ({
//     main: {
//       width: 'auto',
//       display: 'block', // Fix IE 11 issue.
//       marginLeft: theme.spacing.unit * 3,
//       marginRight: theme.spacing.unit * 3,
//       [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
//         width: 400,
//         marginLeft: 'auto',
//         marginRight: 'auto',
//       },
//     },
//     paper: {
//       marginTop: theme.spacing.unit * 8,
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
//     },
//     avatar: {
//       margin: theme.spacing.unit,
//       backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing.unit,
//     },
//     submit: {
//       marginTop: theme.spacing.unit * 3,
//     },
//   });

// }