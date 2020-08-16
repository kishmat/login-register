import React,{useEffect,useState} from 'react'
import styles from './Register.module.css'
import {auth} from '../firebase'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        setUser(authUser)
        }
      else{
        setUser(null)
      }
      }) 
      }, [user])
    
    //to signup or register the user with the email and password 
    const signup = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: name
      })
      })
    .catch((error) => console.log(error.message))
    }
    
    return (
        <div className="container">
        <form onSubmit={(e) => signup(e)} className={styles.box}>
            <h1>Register</h1>
            {
                user? <div><button onClick={() => auth.signOut()}> Sign out</button> </div> : <h1></h1>
            }
            <input type="text" onChange={(e) => setName(e.target.value)} name="" placeholder="Full Name"></input>
            <input type="text" onChange={(e) => setEmail(e.target.value)} name="" placeholder="Email"></input>
            <input type="password" onChange={(e) => setPassword(e.target.value)} name="" placeholder="Password"></input>
            <input type="password" name="" placeholder="Confirm Password"></input>
            <input type="submit" name="" value="Register"></input>
        </form>
        </div>
    )
    
}

export default Register
