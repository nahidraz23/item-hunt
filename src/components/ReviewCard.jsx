import React from 'react';
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {

    const { comment, date, rating, reviewerEmail, reviewerName } = review;

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="mask mask-hexagon w-24">
                            <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{reviewerName}</h2>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="orange"
                            // edit={false}
                            half={true}
                            value={rating}
                        />
                        <p>{reviewerEmail}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p>{comment}</p>
                    <p className='text-center badge badge-info font-medium'>{date.slice(0, 10)}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;