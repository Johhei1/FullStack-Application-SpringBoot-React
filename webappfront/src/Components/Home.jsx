import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="HomeContainer">
            <div className="jumbotron text-center">
                <h1 className="display-4">Welcome to the Web Application</h1>
                <p className="lead">Manage and track user information easily and efficiently.</p>
                <hr className="my-4" />
                <p>Get started by registering a new user or viewing the existing users.</p>
                <div className="button-group">
                    <Link to="/register" className="btn btn-primary btn-lg mx-3" role="button">Register New User</Link>
                    <Link to="/users" className="btn btn-secondary btn-lg mx-3" role="button">Display Users</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
