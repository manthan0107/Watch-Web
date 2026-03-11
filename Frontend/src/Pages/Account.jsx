import Header from "../Components/Header";
import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MdAlternateEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";

const Account = () => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate()

    const [isFlipped, setIsFlipped] = useState(false);

    // const navigate = useNavigate();

    const signin = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        axios.post('http://localhost:9000/register', {
            fullname: name,
            email: email,
            password: password
        })
            .then(function (res) {
                console.log(res);
                // navigate('/main');
                alert("login Successfully")
                navigate('/')
            })
            .catch(function (err) {
                if (err.response && err.response.data.message) {
                    alert(err.response.data.message); // show backend message
                } else {
                    console.log(err);
                }
            });
    }

    const login = (e) => {
        e.preventDefault();

        axios.post('http://localhost:9000/login', {
            fullname: name, // can be empty for login
            email,
            password
        })
            .then(res => {
                console.log(res);

                alert(res.data.message);
                // navigate('/main');
                navigate('/')
            })
            .catch(err => {
                if (err.response && err.response.data.message) {
                    alert(err.response.data.message);
                } else {
                    console.log(err);
                }
            });
    };


    return (
        <>
            <div className="account">
                <Header />

                <div className="section">
                    <div className="container">
                        <div className="row full-height justify-content-center">
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                    <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                    <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                    <label for="reg-log"></label>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4 pb-3">Log In</h4>
                                                        <div className="form-group">
                                                            <input onChange={(e) => { setemail(e.target.value) }} type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                                            <MdAlternateEmail className="input-icon" />
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input onChange={(e) => { setpassword(e.target.value) }} type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                                            <MdLockOutline className="input-icon" />
                                                        </div>
                                                        <button className="btn mt-4" onClick={login}>Login</button>
                                                        <p className="mb-0 mt-4 text-center"><Link to="/updatepass"><a className="link">Forgot your password?</a></Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-back">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4 pb-3">Sign Up</h4>
                                                        <div className="form-group">
                                                            <input onChange={(e) => { setname(e.target.value) }} type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autocomplete="off" />
                                                            <FaRegUser className="input-icon" />
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input onChange={(e) => { setemail(e.target.value) }} type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                                            <MdAlternateEmail className="input-icon" />
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input onChange={(e) => { setpassword(e.target.value) }} type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                                            <MdLockOutline className="input-icon" />
                                                        </div>
                                                        <button className="btn mt-4" onClick={signin}>Sign Up</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account;