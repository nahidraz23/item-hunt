import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext(null)

const ContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data?.products)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className='min-h-screen max-w-full flex items-center justify-center'>
                <progress className="progress w-64"></progress>
            </div>
        )
    }

    const contextData = {
        products,
        setProducts,
    }

    return (
        < Context.Provider value={contextData} >
            {children}
        </Context.Provider >
    )
};

export default ContextProvider;