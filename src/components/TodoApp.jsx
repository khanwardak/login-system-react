import { useState } from "react";
import {BrowserRouter, Routes, Route, useNavigate, useParams, NavLink, Navigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../css/login.css'
import ObojectNotfoundError from "./ObojectNotfoundError";
import Login from './Login';
import CrudTodo from "./CrudTodo";
import Header from "./Header";
import Footer from "./Footer";
import Logout from "./Logout";
import WelcomeComponents from "./WelcomeComponents";
import AuthProvider, { useAuth } from "./security/AuthContext";
// import CrudTodo from "./components/CrudTodo";

export default function Todocomponent(){
    // control the routes if the user Authenticated the can access a specific route
    function AuthenticatedRoutes({children}){
        const authContext = useAuth()
        if(authContext.isAuthenticated){
            return children
            
        }return <Navigate to="/"></Navigate>
    }
    return (
        <div className="todo">
            <AuthProvider>
                {/* this is the children of AuthProvider */}
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/welcom/:username" element={<WelcomeComponents />}></Route>
                    <Route path="todo" element={
                            <AuthenticatedRoutes><CrudTodo/>
                            </AuthenticatedRoutes>
                     }></Route>
                    <Route path="*" element={<ObojectNotfoundError/>}></Route>
                    <Route path="logout" element={<Logout/>}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>  
            </AuthProvider>
        </div>
    );
}











