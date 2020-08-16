import React,{useState} from 'react'
import styles from './Login.module.css'
import {auth} from '../firebase'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .catch((error) => console.log(error.message))
    }
    
    return (
        <div>
            <form className={styles.box} onSubmit={(e) => handleLogin(e)}>
            <h1>Login</h1>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="" placeholder="Email"></input>
            <input type="password" value={password} onChange={(e) => setPassword(password)} name="" placeholder="Password"></input>
            <input type="submit" name="" value="Login"></input>
            </form>
        </div>
    )
}

export default Login
