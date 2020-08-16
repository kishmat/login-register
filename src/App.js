import React,{useContext} from 'react';
import './App.css';
import Register from './components/Register'
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';

function App() {  
  return (
    <div className="App">

      <Router>
      <nav>
          <ul>
            <li>
              <Link to="/login-register">Home</Link>
            </li>
            <li>
              <Link to="/login-register/register">Register</Link>
            </li>
            <li>
              <Link to="/login-register/login">Login</Link>
            </li>
            <li>
              
            </li>
          </ul>
        </nav>
        
     
      <Switch>
      <Route exact path="/login-register">
          <Home/>
        </Route>
        <Route path="/login-register/register">
          <Register/>
        </Route>
        <Route path="/login-register/login">
          <Login/>
        </Route>
      </Switch>
      </Router>

      
    </div>
  );
}

export default App;
