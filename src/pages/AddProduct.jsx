import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();

        const form = e.target;

        const title = form.title.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const stock = parseInt(form.stock.value);
        const brand = form.brand.value;
        const discountPercentage = parseFloat(form.discountPercentage.value);
        const getTags = form.tags.value;
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

        const product = {
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
        }

       fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              product
            })
          })
          .then(res => res.json())
          .then( data => {
            if(data.id){
                toast.success('Product Added Successfully!')
            }
            else {
                toast.error("Something went wrong!")
            }
          })
    }
    
    return (
        <div className='py-5'>
            <h1 className='my-4 text-center text-3xl font-bold'>Add Product</h1>
            <form onSubmit={handleAddProduct} className='w-full'>
                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Title</span>
                        </div>
                        <input name='title' type="text" placeholder="Product Title" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input name='category' type="text" placeholder="Product Category" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <input name='price' type="number" placeholder="Product Price" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Stock</span>
                        </div>
                        <input name='stock' type="number" placeholder="Product Stock" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Brand</span>
                        </div>
                        <input name='brand' type="text" placeholder="Product Brand" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Discount Percentage</span>
                        </div>
                        <input name='discountPercentage' type="number" placeholder="Discount Percentage" className="input input-bordered w-full " />
                    </label>
                </div>

                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Tags(Separated by comma)</span>
                        </div>
                        <input name='tags' type="text" placeholder="Product Tags"className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">SKU</span>
                        </div>
                        <input name='sku' type="text" placeholder="Product SKU" className="input input-bordered w-full " />
                    </label>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Weight</span>
                        </div>
                        <input name='weight' type="text" placeholder="Product Weight" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Shipping</span>
                        </div>
                        <input name='shippingInformation' type="text" placeholder="shipping Information" className="input input-bordered w-full " />
                    </label>
                </div>

                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Minimum Order Quantity</span>
                        </div>
                        <input name='minimumOrderQuantity' type="text" placeholder="Minimum Order Quantity" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Warranty</span>
                        </div>
                        <input name='warrantyInformation' type="text" placeholder="Warranty Information" className="input input-bordered w-full " />
                    </label>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Return Policy</span>
                        </div>
                        <input name='returnPolicy' type="text" placeholder="Return Policy" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Availability Status</span>
                        </div>
                        <input name='availabilityStatus' type="text" placeholder="Availability Status" className="input input-bordered w-full " />
                    </label>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Image URL</span>
                        </div>
                        <input name='images' type="text" placeholder="Image URL" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Dimension</span>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2 w-full'>
                            <div className='w-full'>
                                <div className="label">
                                    <span className="label-text">width</span>
                                </div>
                                <input  name='width' type="text" placeholder="Width" className="input input-bordered w-full " />
                            </div>
                            <div className='w-full'>
                                <div className="label">
                                    <span className="label-text">height</span>
                                </div>
                                <input name='height' type="text" placeholder="Width" className="input input-bordered w-full" />
                            </div>
                            <div className='w-full'>
                                <div className="label">
                                    <span className="label-text">depth</span>
                                </div>
                                <input name='depth' type="text" placeholder="Depth" className="input input-bordered w-full" />
                            </div>

                        </div>
                    </label>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea name='description' className="textarea textarea-bordered" placeholder="Product Description"></textarea>
                    </label>
                </div>

                {/* if there is a button in form, it will close the modal */}

                <button type='submit' className="btn btn-md btn-success text-white mt-2 w-full">Add Product</button>

                {/* <input type="submit" className='btn w-full my-2' value={"Update"} /> */}
            </form>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default AddProduct;