import { useState } from "react";
import {BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from "./security/AuthContext";
function Login (){
    const [password, setPassword] = useState('password')
    const [username, setUsername] = useState('usernmae')
    const [successMessage, setSuccessMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState (false)
    const navigate = useNavigate();
    
   {/* we use the custome hook that created in security for menu 
    if the user Authenticated it show only logout and if the user
    not Authenticated it on show login button,
    also we conrol the routes if user Authenticated the user can navigate
    to other route if not Authenticated the user can not navigate 
    we can specify every route that we want to control*/}
    const authContext = useAuth()

    function UsernameHandler(event){
       setUsername(event.target.value) 
    }
   
    function PasswordHandler(event){
      
        setPassword(event.target.value) 
    }
    function OnLoginClicked(){
        // if user Authenticated setAuthenticate(true)
        if(username ==='khan' && password==='khan'){
            authContext.setAuthenticated(true)
            setSuccessMessage(true)
            setErrorMessage(false)
            console.log('success')
            navigate(`/welcom/${username}`);
        }
        else{
            authContext.setAuthenticated(false)
            setErrorMessage(true)
            setSuccessMessage(false) 
        }
    }
    return (
        <div className="Login">
            {/* also we can do this in a short way */}
            {/* <ShowSuccessMessage /> */}
            {successMessage && <div className="errorMessage">
                <h3>Authenticated Successfully</h3>
            </div> }
            <ShowErrorMessage />
            <div className="username">
                <label>User Nmae:</label>
                <input type="text" value={username} onChange={UsernameHandler}></input>
            </div>

            <div className="password">
                <label>password:</label>
                <input type="password" value={password} onChange={PasswordHandler}></input>
            </div>

            <div className="button" onClick={OnLoginClicked}>
                <button className="butoon" type="button" name="loginBtn">Login</button>
            </div>
        </div>
    );

    function ShowSuccessMessage(){
        if(successMessage){
            return
           
            
        }
        return 
    }
    function ShowErrorMessage(){
        if(errorMessage){
            return(
                <div className="errorMessage">
                    <h3>Invalid password or username </h3>
                </div>
            );
        }
        else{
            return null;
        }
    }
}
export default Login;