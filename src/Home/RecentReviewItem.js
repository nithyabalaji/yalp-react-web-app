import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchDetails } from "../Server/api/client";

const selectUser = (state) => state.user;

const RecentReviewItem = ({ review }) => {
    const dispatch = useDispatch();
    const [restaurant, setRestaurant] = useState({});
    useEffect(() => {fetchDetails(review.restaurant.location_id).then(data => setRestaurant(data))}, []);
    const convertDate = (date) => {
        const dateObj = new Date(date);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return new Intl.DateTimeFormat('en-US', options).format(dateObj);
    }


    return (
        <li className="list-group-item border">
            <div className="row p-3">
                <div className="col-md-2 d-none d-md-block text-center">
                    <img
                        alt="user-pic"
                        src="/images/restaurant_eating.jpg"
                        className="rounded-circle d-none d-md-inline"
                        width="110px" />
                </div>
                <div className="col-12 col-md-10">
                    <div className="d-flex flex-column">
                        <img
                            alt="icon"
                            src={review.user && review.user.avatarIcon}
                            className="rounded-circle d-block d-md-none"
                            width="100px" />
                        <div className="d-flex align-items-center">
                            <div className="col-10 font-18px font-bold">
                                <span className="purple">{review.user && review.user.username}</span>
                                {/* <span className="badge bg-dark ms-3">
                                    <a href={restaurant.website} className="font-color-white" target="_blank">
                                        {restaurant.name}</a>
                                </span> */}
                            </div>
                            <div className="col-2 d-flex justify-content-end">
                                {review.rating}/5 <FaStar className='m-1 purple' />
                            </div>
                        </div>
                        {review.date &&
                            <div className="color-darkgray">
                                {convertDate(review.date)}
                            </div>
                        }
                        {review.restaurant.location_id &&
                            <div className="font-18px">
                            Restaurant: 
                            <Link to={`/details/${review.restaurant.location_id}`}>
                                <span>{review.restaurant.restaurantName}</span>
                            </Link>
                        </div>
                        }
                        {review.restaurant._id &&
                            <div className="font-18px">
                            Restaurant: 
                            <Link to={`/details/${review.restaurant._id}`}>
                                <span>{review.restaurant.restaurantName}</span>
                            </Link>
                        </div>
                        }
                        <div className="font-18px">
                            {review.content}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default RecentReviewItem;