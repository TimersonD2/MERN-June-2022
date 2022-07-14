import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css';


const ProductForm = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products', {
            title,    // this is shortcut syntax for firstName: firstName,
            price,      // this is shortcut syntax for lastName: lastName
            description,      // this is shortcut syntax for lastName: lastName
        })
        .then(res=>{
            console.log(res); // always console log to get used to tracking your data!
            console.log(res.data);
        })
        .catch(err=>console.log(err))


        console.log("Title: ", title);
        console.log("Price: ", price);
        console.log("Description: ", description);
    }
    
    return (
    <div className='productForm'>
        <h2>Product Input Form</h2>
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
                <button>Add Product</button>
            </div>
        </form>
    </div>
    )
}

export default ProductForm
