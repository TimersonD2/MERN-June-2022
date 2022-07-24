import {useEffect, useState} from 'react';
import {NavLink, useParams, useNavigate} from 'react-router-dom';
import './NewAuthor.css';
import axios from 'axios';

const EditAuthor = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [errors, setErrors] = useState({});

    useEffect (() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log(res.data)
            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setSkills(res.data.skills.join(', '));
        })
        .catch(err => console.log('Error in getting one Author', err.response.data.errors))
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name,
            type,
            description,
            skills:skills.split(', '),
        })
        .then(res=>{
            console.log(res.data);
            setErrors({});
        })
        .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div>
            <NavLink className='navLink' to='/'>Home</NavLink>
            <h2 className='formTitle'>Edit author:</h2>
            <form onSubmit={handleSubmit} className='newForm'>
                <div className='row'>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" id="name" value={name} style={{width:"400px"}} onChange={(e) => setName(e.target.value)}></input>
                    {/* {errors.name && <span className='text-danger'>{errors.name.message}</span>} */}
                    {errors.name ? <span className='text-danger'>{errors.name.message}</span> : null}
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
                <div>
                    <button className='authorBtn' onClick={() => navigate('/')}>Cancel</button>
                    <button className='authorBtn'>Submit</button>
                </div>
            </form>
        </div>
        )
}

export default EditAuthor