import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext(null)

const ContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [loadedProduct, setLoadedProducts] = useState([])

    useEffect(() => {
        const loadData = async () => {
            await fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => {
                    setLoadedProducts(data?.products)
                    setLoading(false)
                })
        }
        loadData()
    }, [])

    if (loading) {
        return (
            <div className='min-h-screen max-w-full flex items-center justify-center'>
                <progress className="progress w-64"></progress>
            </div>
        )
    }

    const contextData = {
        loadedProduct,
        setLoading,
    }

    return (
        < Context.Provider value={contextData} >
            {children}
        </Context.Provider >
    )
};

export default ContextProvider;