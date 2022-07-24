import {useState} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './NewAuthor.css';

const NewAuthor = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name,
            type,
            description,
            skills:skills.split(','),
        })
        .then(res=>{
            console.log(res.data);
            navigate('/');
        })
        .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div>
            <h3><NavLink className='navLink' to='/'>Home</NavLink></h3>
            <h3 className='formTitle'>Add a new author:</h3>
            <form onSubmit={handleSubmit} className='newForm'>
                <div className='row'>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" id="name" value={name} style={{width:"300px"}} onChange={(e) => setName(e.target.value)}></input>
                    {errors.name && <span className='text-danger'>{errors.name.message}</span>}
                </div>
                <div className='row'>
                    <label htmlFor='type'>Type:</label>
                    <input type="text" id="type" value={type} style={{width:"300px"}} onChange={(e) => setType(e.target.value)}></input>
                    {errors.type && <span className='text-danger'>{errors.type.message}</span>}
                </div>
                <div className='row'>
                    <label htmlFor='description'>Description:</label>
                    <input type="text" id="type" value={description} style={{width:"300px"}} onChange={(e) => setDescription(e.target.value)}></input>
                    {errors.description && <span className='text-danger'>{errors.description.message}</span>}
                </div>
                <div className='row'>
                    <label htmlFor='skills'>Skills serparated by a comma:</label>
                    <input type="text" id="skills" value={skills} style={{width:"300px"}} onChange={(e) => setSkills(e.target.value)}></input>
                    {errors.skills && <span className='text-danger'>{errors.skills.message}</span>}
                </div>
                <div className='formBtn'>
                    <button className='authorBtn' onClick={() => navigate('/')}>Cancel</button>
                    <button className='authorBtn'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewAuthor