import React from 'react';
import { FaDollarSign, FaEye } from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {

    const { id, images, title, description, price, rating, thumbnail } = item;

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return (
        <div className="card bg-base-100 max-w-96 shadow-xl hover:shadow-slate-400">
            <figure>
                <img
                    src={images[0]}
                    alt="Shoes"
                    className='h-64'
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <h1>{title}</h1>
                </h2>
                <p>{description}</p>
                <div className='flex items-center'>
                    <p className='text-xl font-medium flex items-center'><FaDollarSign className='text-green-600'></FaDollarSign>{price}</p>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="orange"
                        edit={false}
                        half={true}
                        value={rating}
                    />
                </div>
                <Link to={`/product/${id}`}><button className='btn btn-outline w-full'><FaEye></FaEye> View Details</button></Link>
            </div>
        </div>
    );
};

export default ProductCard;