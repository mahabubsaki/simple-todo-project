import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from './Loading';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(e.target.email.value, e.target.password.value);
    }
    useEffect(() => {
        if (user || user1) {
            navigate(from)
        }
    }, [user, user1])
    useEffect(() => {
        if (error) {
            toast.error(error.message, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        else if (error1) {
            toast.error(error1.message, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }, [error, error1])
    if (loading || loading1) {
        return <Loading></Loading>
    }
    return (
        <div style={{ minHeight: "500px" }} className="d-flex justify-content-center align-items-center">
            <div style={{ minWidth: "75%" }}>
                <h1 className="text-center">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" name='email' />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" name='password' />
                    </div>
                    <button type="submit" className="btn btn-primary d-block mx-auto">Sign in</button>
                </form>
                <h3 className="text-center my-3">or</h3>
                <button className="btn btn-success d-block mx-auto" onClick={() => signInWithGoogle()}>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;