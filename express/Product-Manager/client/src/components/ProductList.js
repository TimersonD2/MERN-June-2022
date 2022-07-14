import {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Product from './Product';
import './ProductList.css';


const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch(err=>console.log(err))
    }, []);

    return (
        <div className='productList'>
            <h2>Product List</h2>
            {products.map(( product) => ( 
            <div key={product._id} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Link to={`/product/${product._id}`}>{product.title}</Link>
            </div>))}
        </div>
    )
}

export default ProductList;
