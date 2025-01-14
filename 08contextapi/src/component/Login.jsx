import React from "react";
import UserContext from "../contexts/UserContext";
import { useState, useContext } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username,password});
  };    
    
  return (
    <div>
      <h2>login Form</h2>
        <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
