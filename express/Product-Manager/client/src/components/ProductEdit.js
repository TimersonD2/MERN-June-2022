import {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';

const ProductEdit = () => {
    const [product, setProduct] = useState({});
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err => console.log('Error in getting one Product', err))
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description,
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })
        .catch(err=>console.log(err))


        console.log("Title: ", title);
        console.log("Price: ", price);
        console.log("Description: ", description);
    }

    return (
        <div>
            <h2>Product Edit Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <label htmlFor='title'>Product Title</label>
                    <input type="text" id="title" value={title} style={{width:"400px"}} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className='row'>
                    <label htmlFor='price'>Price</label>
                    <input type="text" id="price" value={price} style={{width:"400px"}} onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <div className='row'>
                    <label htmlFor='description'>Description</label>
                    <input type="text" id="description" value={description} style={{width:"400px"}} onChange={(e) => setDescription(e.target.value)}></input>
                </div>
                <div>
                    <button>Update Product</button>
                </div>
            </form>
        </div>
    )
}

export default ProductEdit;
