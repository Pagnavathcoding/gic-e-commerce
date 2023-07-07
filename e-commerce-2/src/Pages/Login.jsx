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
    const [isUser, setIsUser] = useState(false);
    const handleUserLogin = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/auth/login`, {
            email: email,
            password: password
        }).then(data => {
            console.log(data);
            if (data.data.status === "SUCCESS") {
                setIsUser(true);
            }
            const token = data.data.token;
            localStorage.setItem("token", token);
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/auth/user`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div className="login">
            {
                isUser && <div className="login-success">
                    <h1>Login Successfully!</h1>
                </div>
            }
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