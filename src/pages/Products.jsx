import React, { useEffect, useState } from 'react';
import ProductCard from '../components/Products/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProducts(data?.products))
    },[])

    // console.log(products)
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-14'>
           {
            products.map((item, index) => <ProductCard key={index} item={item}></ProductCard>)
           }
        </div>
    );
};

export default Products;