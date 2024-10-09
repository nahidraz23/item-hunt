import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {

    const { id, images, title, tags, description, price, rating } = item;

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={images}
                    alt="Shoes"
                    className='h-64'
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <h1>{title}</h1>
                </h2>
                <p>{description}</p>
                {/* <div className="card-actions justify-end">
                    {
                        tags.map(tag => <p className="badge badge-info">{tag}</p>)
                    }
                </div> */}
                <div className='flex items-center'>
                    <p className='text-xl font-medium'>{price}</p>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="orange"
                        // edit={false}
                        half={true}
                        value={rating}
                    />
                </div>
                <Link to={`/product/${id}`}><button  className='btn w-full'>View Details</button></Link>
            </div>
        </div>
    );
};

export default ProductCard;