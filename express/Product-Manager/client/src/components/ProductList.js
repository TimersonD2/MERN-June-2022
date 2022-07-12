import React from 'react'

const ProductList = (props) => {

    const {products, setProducts} = props;

    const handleChange = (i, complete) => {
        const newProducts = products.map((product, index) => {
            if(index === i) {
                const updatedProduct = {...task, complete:complete};
                return updatedProduct;
            }
            return product;
        });
        setProducts(newProducts);
        console.log("Products: ", newProducts);
    }
    
    const handleDelete = (i) => {
        const filteredProducts = products.filter((t, index) => index !== i);
        setProducts(filteredProducts);
        console.log("Filtered: ", filteredProducts);
    }
    
    return (
    <div>
        <div>
            {products.map(( product, index) => ( 
            <div key={index} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p>${product.title}</p>
                <p>${product.price}</p>
                <p>${product.description}</p>
                <button className='delButton' onClick={() => handleDelete(index)}>Delete</button>
            </div> ))}
        </div>
    </div>
    )
}

export default ProductList;
