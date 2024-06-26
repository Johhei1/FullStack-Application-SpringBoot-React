import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import RegisterUser from './Components/RegisterUser';
import DisplayUsers from './Components/DisplayUsers';
import UserDetails from './Components/UserDetails';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<RegisterUser />} />
                    <Route path="/users" element={<DisplayUsers />} />
                    <Route path="/users/:id" element={<UserDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
