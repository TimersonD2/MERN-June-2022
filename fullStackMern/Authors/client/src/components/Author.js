import {useEffect, useState} from 'react';
import {NavLink, useParams, useNavigate} from 'react-router-dom';
import './NewAuthor.css';
import axios from 'axios';

const Author = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect (() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log(res.data)
            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setSkills(res.data.skills);
        })
        .catch(err => setErrors(err.response.data.errors))
    }, [id]);

    return (
        <div>
            <NavLink className='navLink' to='/'>Home</NavLink>
            <h2 className='formTitle'>Name: {name}</h2>
            <h2 className='formTitle'>Type: {type}</h2>
            <h2 className='formTitle'>Description: {description}</h2>
            <h2 className='formTitle'>Skills: {skills.join(', ')}</h2>
            {errors.name && <span className='text-danger'>{errors.name.message}</span>}
        </div>
    )
}

export default Author