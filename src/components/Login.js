import React from 'react'
import styles from './Login.module.css'

const Login = () => {
    return (
        <div>
            <form className={styles.box} action="index.html" method="post">
            <h1>Login</h1>
            <input type="text" name="" placeholder="Username"></input>
            <input type="password" name="" placeholder="Password"></input>
            <input type="submit" name="" value="Login"></input>
            </form>
        </div>
    )
}

export default Login
