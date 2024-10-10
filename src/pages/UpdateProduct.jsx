import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {

    const product = useLoaderData();

    // console.log(product)

        // handle update product 
        const handleUpdate = (e) => {
            e.preventDefault();

            const form = e.target;

            const title = form.title.value;
            const category = form.category.value;
            const price = parseFloat(form.category.value);
            const stock = parseInt(form.stock.value);
            const brand = form.brand.value;
            const discountPercentage = parseFloat(form.discountPercentage.value);
            const getTags  = form.tags.value;
            const tags = getTags.split(",");
            const sku = form.sku.value;
            const weight = parseInt(form.weight.value);
            const shippingInformation = form.shippingInformation.value;
            const minimumOrderQuantity = parseInt(form.minimumOrderQuantity.value);
            const warrantyInformation = form.warrantyInformation.value;
            const returnPolicy = form.returnPolicy.value;
            const availabilityStatus = form.availabilityStatus.value;
            const images = form.images.value;
            const dimensions = {
                width: parseFloat(form.width.value),
                height: parseFloat(form.height.value),
                depth: parseFloat(form.depth.value)
            }
            const description = form.description.value;

            // const UpdateProduct = {
            //     title,
            //     category,
            //     price,
            //     stock,
            //     brand,
            //     discountPercentage,
            //     tags,
            //     sku,
            //     weight,
            //     shippingInformation,
            //     minimumOrderQuantity,
            //     warrantyInformation,
            //     returnPolicy,
            //     availabilityStatus,
            //     images,
            //     dimensions,
            //     description
            // }

            // console.log(UpdateProduct)

            fetch(`https://dummyjson.com/products/${product.id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    title,
                    category,
                    price,
                    stock,
                    brand,
                    discountPercentage,
                    tags,
                    sku,
                    weight,
                    shippingInformation,
                    minimumOrderQuantity,
                    warrantyInformation,
                    returnPolicy,
                    availabilityStatus,
                    images,
                    dimensions,
                    description
                })
            })
            .then(res => res.json())
            .then(data => console.log(data))
            
        }

    return (
        <div className='py-5'>
            <h1 className='my-4 text-center text-3xl font-bold'>Update Product : {product.title}</h1>
            <form onSubmit={handleUpdate} className='w-full'>
                <div className='w-full flex gap-4'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Title</span>
                        </div>
                        <input defaultValue={product.title} name='title' type="text" placeholder={product.title} className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input defaultValue={product.category} name='category' type="text" placeholder={product.category} className="input input-bordered w-full " />
                    </label>
                </div>

                <div className='w-full flex gap-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <input defaultValue={product.price} name='price' type="number" placeholder={product.price} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Stock</span>
                        </div>
                        <input defaultValue={product.stock} name='stock' type="number" placeholder={product.stock} className="input input-bordered w-full " />
                    </label>
                </div>

                <div className='w-full flex gap-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Brand</span>
                        </div>
                        <input defaultValue={product.brand} name='brand' type="text" placeholder={product.brand} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Discount Percentage</span>
                        </div>
                        <input defaultValue={product.discountPercentage} name='discountPercentage' type="number" placeholder={product.discountPercentage} className="input input-bordered w-full " />
                    </label>
                </div>

                <div className='w-full flex gap-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Tags</span>
                        </div>
                        <input defaultValue={product.tags} name='tags' type="text" placeholder={product.tags} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">SKU</span>
                        </div>
                        <input defaultValue={product.sku} name='sku' type="text" placeholder={product.sku} className="input input-bordered w-full " />
                    </label>
                </div>
                <div className='w-full flex gap-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Weight</span>
                        </div>
                        <input defaultValue={product.weight} name='weight' type="text" placeholder={product.weight} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Shipping</span>
                        </div>
                        <input defaultValue={product.shippingInformation} name='shippingInformation' type="text" placeholder={product.shippingInformation} className="input input-bordered w-full " />
                    </label>
                </div>

                <div className='w-full flex gap-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Minimum Quantity</span>
                        </div>
                        <input defaultValue={product.minimumOrderQuantity} name='minimumOrderQuantity' type="text" placeholder={product.minimumOrderQuantity} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Warranty</span>
                        </div>
                        <input defaultValue={product.warrantyInformation} name='warrantyInformation' type="text" placeholder={product.warrantyInformation} className="input input-bordered w-full " />
                    </label>
                </div>
                <div className='w-full flex gap-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Return Policy</span>
                        </div>
                        <input defaultValue={product.returnPolicy} name='returnPolicy' type="text" placeholder={product.returnPolicy} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Availability Status</span>
                        </div>
                        <input defaultValue={product.availabilityStatus} name='availabilityStatus' type="text" placeholder={product.availabilityStatus} className="input input-bordered w-full " />
                    </label>
                </div>
                <div className='w-full flex gap-4'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Image URL</span>
                        </div>
                        <input defaultValue={product.images} name='images' type="text" placeholder={product.images} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className='w-full flex gap-4'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Dimension</span>
                        </div>
                        <div className='flex gap-2 w-full'>
                            <div className='w-full'>
                                <div className="label">
                                    <span className="label-text">width</span>
                                </div>
                                <input defaultValue={product.dimensions.width} name='width' type="text" placeholder={product.dimensions.width} className="input input-bordered w-full " />
                            </div>
                            <div className='w-full'>
                                <div className="label">
                                    <span className="label-text">height</span>
                                </div>
                                <input defaultValue={product.dimensions.height} name='height' type="text" placeholder={product.dimensions.height} className="input input-bordered w-full" />
                            </div>
                            <div className='w-full'>
                                <div className="label">
                                    <span className="label-text">depth</span>
                                </div>
                                <input defaultValue={product.dimensions.depth} name='depth' type="text" placeholder={product.dimensions.depth} className="input input-bordered w-full" />
                            </div>

                        </div>
                    </label>
                </div>
                <div className='w-full flex gap-4'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea defaultValue={product.description} name='description' className="textarea textarea-bordered" placeholder={product.description}></textarea>
                    </label>
                </div>

                {/* if there is a button in form, it will close the modal */}

                <button type='submit' className="btn btn-md btn-success text-white mt-2 w-full">Done</button>

                {/* <input type="submit" className='btn w-full my-2' value={"Update"} /> */}
            </form>
        </div>
    );
};

export default UpdateProduct;