import React, {useState} from 'react';

const Person = (props) => {
    const [personAge, setPersonAge] = useState(props.age);

    return (
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
            <p>Age: {personAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ (event)=> setPersonAge(personAge + 1) }>Had A Birthday!</button>      
        </div>
    )
}

export default Person;
