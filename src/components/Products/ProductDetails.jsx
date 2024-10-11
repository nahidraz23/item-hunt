import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { FaShippingFast } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { QRCodeCanvas } from 'qrcode.react';
import ReviewCard from '../ReviewCard';

const ProductDetails = () => {

    const loadedProduct = useLoaderData();

    const {
        title,
        images,
        rating,
        price,
        discountPercentage,
        reviews,
        stock,
        brand,
        sku,
        minimumOrderQuantity,
        returnPolicy,
        description,
        dimensions,
        shippingInformation,
        meta,
        warrantyInformation,
        tags,

    } = loadedProduct

    const ratingChanged = newRating => {
        console.log(newRating)
    }

    return (
        <>
            <div className='flex flex-col md:flex-row justify-center gap-10 items-center'>
                <div>
                    <img src={images[0]} alt='' className='w-[491px] h-[655px]' />
                </div>
                <div className='flex flex-col items-center md:justify-around w-[491px] h-[655px] gap-3'>
                    <div className='flex flex-col gap-3'>
                        <div>
                            <h1 className='uppercase font-medium opacity-60'>{brand}</h1>
                            <h2 className='text-2xl font-bold'>{title}</h2>
                            <div className='flex gap-2 font-semibold text-sm opacity-70'>
                                <h5>SKU:</h5>
                                <h5>#{sku}</h5>
                            </div>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor='orange'
                                // edit={false}
                                half={true}
                                value={rating}
                                edit={false}
                            />
                        </div>
                        <div className='flex gap-10 items-center '>
                            <div className='flex items-center gap-1'>
                                <p className='text-2xl font-semibold'>${price}</p>
                            </div>
                            <p className='font-medium badge badge-error text-white'>
                                save {discountPercentage}%
                            </p>
                        </div>
                        <div className='flex gap-3'>
                            {
                                tags.map(tag => <p className='badge badge-outline'>{tag}</p>)
                            }
                        </div>
                        <div className='flex items-center gap-1'>
                            <MdProductionQuantityLimits />
                            <p>
                                Only <span className='text-red-500 font-bold'>{stock}</span>{' '}
                                items(s) left in stock!
                            </p>
                        </div>
                        <p className='font-medium'>
                            Minimum order quantity:{' '}
                            <span className='text-red-500 font-bold'>
                                {minimumOrderQuantity}
                            </span>
                        </p>
                        <p >{warrantyInformation}</p>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-6 w-full'>
                            <div className='flex gap-1 items-center border-2 py-3 px-6 text-green-600 font-bold'>
                                <FaCheck />
                                <p className=''>
                                    <span className=''>{returnPolicy} </span>
                                </p>
                            </div>
                            <div className='flex items-center gap-1 border-2 py-3 px-6'>
                                <FaShippingFast className='text-red-500' />
                                <p>{shippingInformation}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <QRCodeCanvas value={meta?.qrcode} />
                    </div>
                    <div className='flex flex-col w-full md:flex-row justify-between gap-2'>
                        <button className='btn w-full md:w-1/2'>Buy Now</button>
                        <button className='btn w-full md:w-1/2'>Add to cart</button>
                    </div>
                </div>
            </div>
            {/* Detailed Information */}
            <div className='space-y-10'>
                <h1 className='text-center text-4xl font-semibold'>
                    Detailed Information
                </h1>
                <div className='pb-20 space-y-2'>
                    {/* description collapse */}
                    <div
                        tabIndex={0}
                        className='collapse collapse-arrow border-base-300 bg-base-200 border'
                    >
                        <div className='collapse-title text-xl font-medium text-center'>Description</div>
                        <div className='collapse-content bg-white'>
                            <p className='text-lg'>{description}</p>
                        </div>
                    </div>
                    {/* dimensions collapse */}
                    <div
                        tabIndex={0}
                        className='collapse collapse-arrow border-base-300 bg-base-200 border'
                    >
                        <div className='collapse-title text-xl font-medium text-center'>Dimensions</div>
                        <div className='flex items-center gap-2 collapse-content bg-white'>
                            <div className="overflow-x-auto w-full">
                                <table className="table">
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>Width</th>
                                            <td>{dimensions.width}</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <th>Height</th>
                                            <td>{dimensions?.height}</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>Depth</th>
                                            <td>{dimensions?.depth}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* meta collapse */}
                    <div
                        tabIndex={0}
                        className='collapse collapse-arrow border-base-300 bg-base-200 border'
                    >
                        <div className='collapse-title text-xl font-medium text-center'>Meta</div>
                        <div className='flex items-center gap-2 collapse-content bg-white'>
                            <div className="overflow-x-auto w-full">
                                <table className="table">
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>Created At</th>
                                            <td>{meta?.createdAt.slice(0,10)}</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <th>Updated At</th>
                                            <td>{meta?.updatedAt.slice(0, 10)}</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>Barcode</th>
                                            <td>{meta?.barcode}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Reviews */}
            <div className='flex flex-col justify-center space-y-10 py-4'>
                <h1 className='text-center text-4xl font-semibold'>
                    Reviews
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
                   {
                    reviews.map((review, index) => <ReviewCard key={index} review={review}></ReviewCard>)
                   }
                </div>
            </div>
        </>
    )
}

export default ProductDetails
