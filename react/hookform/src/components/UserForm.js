import React, { useState } from  'react';

const UserForm = (props) => {
    // const {newUser} = (props);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confPassword, setConfPassword] = useState("");  
    
    return (
    <div>
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}></input>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={(e) => setConfPassword(e.target.value)} value={confPassword}></input>
            </div>
        </form>

        <br/>
        <br/>

        <h2>Your Form Data</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confPassword}</p>
    </div>
)
}

export default UserForm;

