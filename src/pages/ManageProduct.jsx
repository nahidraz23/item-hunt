import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Context } from '../providers/ContextProvider';
import { MdPlaylistAdd } from "react-icons/md";

const ManageProduct = () => {

    const { loadedProduct } = useContext(Context);

    // handle delete product
    const handleDelete = async id => {
        await fetch(`https://dummyjson.com/products/${id}`, {
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
    }

    return (
        <div>
            <h1 className='text-3xl font-bold mt-4 mb-10 text-center'>Manage Products</h1>
            <div className='flex justify-center'>
                <Link to={'/addproduct'}>
                    <button className='btn btn-outline text-blue-600'>
                    <MdPlaylistAdd />Add Product</button>
                </Link>
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadedProduct.map((product) => <tr key={product.id}>
                                <th>{product?.id}</th>
                                <th>{product?.sku}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={product.images[0]}
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
                                <th className='flex flex-col md:flex-row gap-3'>
                                    <Link to={`/manageproduct/${product.id}`}>
                                        <button className="btn btn-outline text-green-700 hover:text-green-600"><FaPencil></FaPencil>Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(product.id)} className="btn btn-outline text-red-600 hover:text-red-600"><FaTrash></FaTrash>Delete</button>
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