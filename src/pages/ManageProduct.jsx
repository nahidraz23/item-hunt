import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const ManageProduct = () => {

    const loadedProduct = useLoaderData();
    const [produts, setProducts] = useState([]);

    // handle update product 
    const hadnleUpdate = id => {
        console.log(id)
    }

    // handle delete product
    const handleDelete = id => {
        fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.isDeleted) {
                    toast.success('Item Deleted Successfully!')
                }
                else {
                    toast.error("Something went wrong!")
                }
            })

        console.log(id)
    }
    // console.log(loadedProduct)

    return (
        <div>
            <h1 className='text-3xl font-bold mt-4 mb-10 text-center'>Manage Products</h1>
            <div className='flex justify-center'>
                <button className='btn'>Add Product</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>SKU</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadedProduct.products.map((product) => <tr>
                                <th>{product?.id}</th>
                                <th>{product.sku}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={product.images}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{product.title}</div>
                                        <div className="text-sm opacity-50">{product.brand}</div>
                                    </div>
                                </td>
                                <td>
                                    <h1>${product.price}</h1>
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{product.availabilityStatus}</span>
                                </td>
                                <td>{product.category}</td>
                                <th className='flex gap-3'>
                                    <button onClick={() => hadnleUpdate(product.id)} className="btn btn-xs">Update</button>
                                    <button onClick={() => handleDelete(product.id)} className="btn btn-xs btn-warning">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default ManageProduct;