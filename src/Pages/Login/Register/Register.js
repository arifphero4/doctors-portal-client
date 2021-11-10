import { Alert, Button, CircularProgress, Container,  TextField,  Typography } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../images/login.png';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, loading, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log (field, value,newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Your Password did not matched')
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
        <Grid container spacing={2}>
             <Grid item sx={{mt:8}} xs={12} md={6}>
                     <Typography variant="body1" gutterBottom>Register</Typography>

                     { !loading && <form onSubmit={handleLoginSubmit}>
                     <TextField 
                         sx={{width:'75%', m: 1}}
                         id="standard-basic" 
                         label="Your Name" 
                         name="name"
                         type="text"
                         onBlur={handleOnBlur}
                         variant="standard" />
                     <TextField 
                         sx={{width:'75%', m: 1}}
                         id="standard-basic" 
                         label="Your Email" 
                         name="email"
                         type="email"
                         onBlur={handleOnBlur}
                         variant="standard" />
                     <TextField 
                         sx={{width:'75%', m: 1}}
                         id="standard-basic" 
                         label="Your Password" 
                         name="password"
                         onBlur={handleOnBlur}
                         type="password"
                         variant="standard" />
                     <TextField 
                         sx={{width:'75%', m: 1}}
                         id="standard-basic" 
                         label="Retype Your Password" 
                         name="password2"
                         type="password"
                         onBlur={handleOnBlur}
                         variant="standard" />
                     
                     <Button sx={{width:'75%', m: 1}} type="submit" variant="contained">Register</Button>

                     <NavLink 
                     to="/login"
                     style={{textDecoration: 'none'}}>
                         <Button variant="text">Already Registered? Please Login</Button>
                     </NavLink>

                     </form>}
                     {loading && <CircularProgress/> }
                     {user?.email &&  <Alert severity="success"> User Created Successfully!</Alert>}
                     {authError && <Alert severity="error">{authError}</Alert>}

             </Grid>
             <Grid item xs={12} md={6}>
                 <img style={{width:"100%"}} src={login} alt=""/>                       

             </Grid>
        </Grid>
     </Container>
    );
};

export default Register;