import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';

const Navbar = () => {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Todo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">Add a Task</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tasks" className="nav-link">Your Tasks</Link>
                        </li>
                        {
                            !user ?
                                <>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link">Register</Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <button className="btn btn-warning nav-link" onClick={() => signOut(auth)}>SignOut</button>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;