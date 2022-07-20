import {useState, useEffect} from 'react'
import axios from 'axios';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const Main = () => {
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
        <div>
            <ProductForm products={products} setProducts={setProducts}/>
            <ProductList products={products} setProducts={setProducts}/>
        </div>
    )
}

export default Main