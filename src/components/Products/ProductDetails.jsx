import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import { MdProductionQuantityLimits } from 'react-icons/md'

const ProductDetails = () => {
  const loadedProduct = useLoaderData()
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

  } = loadedProduct

  const ratingChanged = newRating => {
    console.log(newRating)
  }

  console.log(loadedProduct)

  return (
    <>
      <div className='flex justify-center gap-10 items-center'>
        <div>
          <img src={images} alt='' className='w-[491px] h-[655px]' />
        </div>
        <div className='flex flex-col justify-around w-[491px] h-[655px]'>
          <div>
            <div>
              <h1 className='uppercase font-medium opacity-60'>{brand}</h1>
              <h2 className='text-2xl font-bold'>{title}</h2>
              <div className='flex gap-2 font-semibold text-sm'>
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
            <p>
              <span className='text-green-600 font-bold'>{returnPolicy} </span>
            </p>
          </div>
          <div className='flex justify-between gap-2'>
            <button className='btn w-1/2'>Buy Now</button>
            <button className='btn w-1/2'>Add to cart</button>
          </div>
        </div>
      </div>
      <div className=''>
        <h1 className='text-center text-4xl font-semibold'>
          Detailed Information
        </h1>
        <div
          tabIndex={0}
          className='collapse collapse-arrow border-base-300 bg-base-200 border'
        >
          <div className='collapse-title text-xl font-medium'>Brand</div>
          <div className='collapse-content bg-white'>
            <p className='text-xl font-medium'>{brand}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
