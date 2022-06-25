import React, { useState } from  'react';

const UserForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confPassword, setConfPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confPasswordError, setConfPasswordError] = useState("");
    const [lengthError, setLengthError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const formError = firstNameError || lastNameError || emailError || passwordError || confPasswordError || lengthError;
        if (firstName && lastName && email && password && confPassword && !formError) {
            const newUser = {
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password,
                confPassword:confPassword
            }
            console.log("New User: ", newUser);
        } else {
            alert("The Form Has Errors")
        }
    }

    const checkFirstName = (e) => {
        setFirstName(e.target.value);
        e.target.value.length < 2 ? setFirstNameError("First Name must be at least 2 characters") : setFirstNameError("");
    }    

    const checkLastName = (e) => {
        setLastName(e.target.value);
        e.target.value.length < 2 ? setLastNameError("First Name must be at least 2 characters") : setLastNameError("");
    }    

    const checkEmail = (e) => {
        setEmail(e.target.value);
        e.target.value.length < 5 ? setEmailError("First Name must be at least 2 characters") : setEmailError("");
    }    

    const checkPassword = (e) => {
        setPassword(e.target.value);
        e.target.value.length < 8 ? setPasswordError("Password must be at least 8 characters") : setPasswordError("");
    }    

    const checkConfPassword = (e) => {
        setConfPassword(e.target.value);
        e.target.value.length < 8 ? setLengthError("Password must be at least 8 characters") : setLengthError("");
        e.target.value !== password ? setConfPasswordError("Password Confirmation must match the password") : setConfPasswordError("");
    }    

    return (
    <div>
        <form onSubmit = { handleSubmit }>
            <div className='row'>
                <label htmlFor="firstName" >First Name: </label>
                <input type="text" id="firstName" onChange={ checkFirstName } value={firstName}></input>
                { firstNameError ? <p style={{color:'red'}}> {firstNameError} </p> : null}
            </div>
            <div className='row'>
                <label htmlFor="lastName" >Last Name: </label>
                <input type="text" id="lastName" onChange={ checkLastName } value={lastName}></input>
                { lastNameError ? <p style={{color:'red'}}> {lastNameError} </p> : null}
            </div>
            <div className='row'>
                <label htmlFor="email" >Email: </label>
                <input type="text" id="email" onChange={ checkEmail } value={email}></input>
                { emailError ? <p style={{color:'red'}}> {emailError} </p> : null}
            </div>
            <div className='row'>
                <label htmlFor="password" >Password: </label>
                <input type="password" id="password" onChange={ checkPassword } value={password}></input>
                { passwordError ? <p style={{color:'red'}}> {passwordError} </p> : null}
            </div>
            <div className='row'>
                <label htmlFor="confPassword" >Confirm Password: </label>
                <input type="password" id="confPassword" onChange={ checkConfPassword } value={confPassword}></input>
                { lengthError ? <p style={{color:'red'}}> {lengthError} </p> : null}
                { confPasswordError ? <p style={{color:'red'}}> {confPasswordError} </p> : null}
            </div>
            <button type='submit'>Create User</button>
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

