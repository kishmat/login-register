import React,{useEffect,useState} from 'react'
import styles from './Register.module.css'
import {auth} from '../firebase'
import firebase from "firebase";


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('unknown')

    // console.log(name)

    useEffect(() => {
        var usern = firebase.auth().currentUser;

        if (usern) {
            console.log(usern)
        } else {
            setUser('unknown')
        }

    }, [user, name])

    // const onNameChange =(e) => {
    //     setName = e.target.value
    //     console.log(e.target.value)
    // }
    
    const signup = () => {
        auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: name
      })
    })
    .catch((error) => alert(error.message))
    }
    return (
        <div className="container">
        <form className={styles.box} action="index.html" method="post">
            <h1>Register</h1>
            <h1>{user}</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} name="" placeholder="Full Name"></input>
            <input type="text" onChange={(e) => setEmail(e.target.value)} name="" placeholder="Email"></input>
            <input type="password" onChange={(e) => setPassword(e.target.value)} name="" placeholder="Password"></input>
            <input type="password" name="" placeholder="Confirm Password"></input>
            <input type="submit" onClick={signup} name="" value="Register"></input>
        </form>
        </div>
    )
}

export default Register
