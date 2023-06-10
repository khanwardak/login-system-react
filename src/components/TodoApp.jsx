import { useState } from "react";
import {BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../css/login.css'
import ObojectNotfoundError from "./ObojectNotfoundError";
import Login from './Login';
import CrudTodo from "./CrudTodo";
import Header from "./Header";
import Footer from "./Footer";
import Logout from "./Logout";
import WelcomeComponents from "./WelcomeComponents";
import AuthProvider from "./security/AuthContext";
// import CrudTodo from "./components/CrudTodo";

export default function Todocomponent(){
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
                    <Route path="todo" element={<CrudTodo/>}></Route>
                    <Route path="*" element={<ObojectNotfoundError/>}></Route>
                    <Route path="logout" element={<Logout/>}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>  
            </AuthProvider>
        </div>
    );
}











