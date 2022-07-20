import {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err => console.log('Error in getting one Product', err))
    }, [id]);

    const handleDelete = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            console.log(res);
            navigate('/');
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className='product'>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Link to={`/edit/${product._id}`}>Edit Product</Link>
            <button className='deleteBtn' onClick = {() => handleDelete(product._id)}>Delete Product</button>
        </div>
    )}

export default Product