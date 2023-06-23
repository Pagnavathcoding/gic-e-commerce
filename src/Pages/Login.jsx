import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [token, setToken] = useState("");
    // function handleSubmitUserLogin(e) {
    //     e.preventDefault();
    //     axios.post("http://localhost:9000/auth/signin", {
    //         email: email,
    //         password: password
    //     }).then(data => {
    //         const getToken = data.data.token;
    //         setToken(getToken);
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    // useEffect(() => {
    //     if (token !== "") {
    //         localStorage.setItem("token", token);
    //     }
    // }, [token]);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // useEffect(() => {
    //     axios.post("http://localhost:9000/auth", {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     }).then(data => {
    //         console.log(data);
    //     }).catch(err => {
    //         return err;
    //     });
    // }, [])
    const handleUserLogin = (e) => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_LOGIN_BACKEND, {
            email: email,
            password: password
        }).then(data => {
            console.log(data);
            const token = data.data.token;
            localStorage.setItem("token", token);
        }).catch(err => {
            console.log(err);
        })
    }
    const [isUser, setIsUser] = useState(false);
    useEffect(() => {
        const headers = { 'Authorization': `Bearer ${localStorage.getItem("token")}` };
        axios.get("http://localhost:9000/auth/auth", {headers}).then(data => {
            if (data.data === "SUCCESS") {
                setIsUser(true);
                // console.log(data)
            }
        }).catch(err => {
            console.log(err);
        })
        axios.get("http://localhost:9000/auth/collection", { 'Authorization': `Bearer ${localStorage.getItem("token")}` }).then(data => {
            console.log(data);
        }).catch(err => console.log(err))
    }, [])
    return (
        <div className="login">
            {!isUser && <form onSubmit={handleUserLogin}>
                <h1>Login</h1>
                <input type="email" placeholder="Email..." value={email} onChange={e => setEmail(e.target.value)} required/>
                <input type="password" placeholder="Password..." value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
                <p>Or <Link to={"/signup"}>Create An Account</Link></p>
            </form>}
        </div>
    )
}