import {useEffect, useState} from 'react';
import axios from 'axios';
import {NavLink, useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './AuthorList.css'

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {
            console.log(res.data);
            setAuthors(res.data);
        })
        .catch(err=>console.log(err.response.data.errors))
    }, []);

    const sortAuthors = () => {
        authors.sort(function(a,b) {
            const nameA = a.type.toUpperCase();
            const nameB = b.type.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            else if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        const newAuthors = (authors.map((ele, index) => {
            return {...ele, liked:false};
        }))
        console.log("Sorted Authors array", authors);
        console.log("Liked Array", newAuthors);
        // setAuthors(newAuthors);
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(res=>{
            console.log(res);
            setAuthors(authors.filter(author => author._id !== id))
        })
        .catch(err=>console.log(err.response.data.errors))
    }

    return (
        <div className='authorList'>
            {sortAuthors()}
            <h3><NavLink className='navLink' to='/new'>Add an author</NavLink></h3>
            <h2 className='listTitle'>We have quotes by:</h2>
            <div className='authors'>
                <table>
                    <thead>
                        <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map(( author) => ( 
                        <tr key={author._id}>
                            <td className='tableText'>{author.name}</td>
                            <td>
                                <button className='editBtn' onClick={() => navigate(`/edit/${author._id}`)}>Edit</button>
                                <button className='deleteBtn' onClick={() => handleDelete(author._id)}>Delete</button>
                                {/* <button className='likeBtn' disabled={author.liked} >Like Me!</button> */}
                                {/* <Link to={`/author/${author._id}`}>Details</Link> */}
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AuthorList
