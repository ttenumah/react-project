
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './Page/Dashboard/AddEmployee'
import Login from './Page/Dashboard/Login'
import RegisterPage from './Page/Dashboard/ListEmployee'
import ForgetPasswordPage from './Page/Dashboard/Header'
import HomePage from './Page/Dashboard/EditEmployee'


import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    
                    <Route exact path="/Login" component={ Login } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                </Routes>
            
            </div>
        </Router>
    )
}