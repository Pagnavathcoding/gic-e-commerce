import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";
const {useState, useEffect} = React;

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [repeatPass, setRepeatPass] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [registered, setRegistered] = useState(false);
    const handleUserSignup = (e) => {
        e.preventDefault();
        if (password === repeatPass) {
            axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/auth/register`, {
                name: username,
                email: email,
                password: password
            }).then(data => {
                console.log(data);
                if (data.data.status === "SUCCESS") {
                    setRegistered(true);
                }
            })
        } else {
            alert("Password Not Match!");
        }
    }
    return (
        <div className="signup">
            {
                registered && <div className="register-success">
                    <h1>Your account has been created successfully!</h1>
                    <Link to={"/login"}><button>Log in now</button></Link>
                </div>
            }
            {!registered && <form onSubmit={handleUserSignup}>
                <h1>Sign Up</h1>
                <input type="test" placeholder="Full Name..." value={username} onChange={e => setUsername(e.target.value)} required/>
                <input type="email" placeholder="Email..." value={email} onChange={e => setEmail(e.target.value)} required/>
                <input type={showPass ? "text" : "password"} placeholder="Password..." value={password} onChange={e => setPassword(e.target.value)} required />
                <input type={showPass ? "text" : "password"} placeholder="Repeat Password..." value={repeatPass} onChange={e => setRepeatPass(e.target.value)} required />
                <b onClick={() => setShowPass(!showPass)}>{showPass ? "Hide Password" : "Show Password"}</b>
                <button type="submit">Sign Up</button>
                <p>Having an account? <Link to={"/login"}>Login</Link></p>
            </form>}
        </div>
    )
}