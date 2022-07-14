import {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err => console.log('Error in getting one Product', err))
    }, [id]);


    return (
        <div className='product'>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Link to={`/edit/${product._id}`}>Edit Product</Link>
        </div>
    )}

export default Product