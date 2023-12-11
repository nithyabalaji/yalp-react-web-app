import React from 'react';
import {Link} from 'react-router-dom';

const RestaurantItem = ({restaurant}) => {
    console.log("find item", restaurant)
    return (
        <li className="list-group-item mb-2">
            <div className="row">
                <div className="col-12 col-md-7">
                    <div className="d-flex flex-column">
                        <div className="d-block d-md-none text-center mb-3">
                            <img
                                src={`/Images/restaurant-img-1.jpg`}
                                alt="avatar"
                                width="400px"/>
                        </div>
                        <div>
                            <div>
                                <h2>{restaurant.name}</h2>
                            </div>
                            <div className="d-flex flex-column">
                                <h4>Information</h4>
                                <span>Address: {restaurant.address}</span>
                                <span>Phone: {restaurant.phone}</span>
                                <span>Website: {restaurant.website}</span>
                            </div>
                            <div className="mt-2">
                                <h4>About</h4>
                                <span>{restaurant.description}</span>
                            </div>
                            <div className="mt-2">
                                {restaurant.location_id &&
                                <Link to={`/details/${restaurant.location_id}`}>
                                    <button className="btn btn-primary purple">
                                        Details
                                    </button>
                                </Link>
                                }
                                {restaurant._id &&
                                <Link to={`/details/local/${restaurant._id}`}>
                                    <button className="btn btn-primary purple">
                                        Details
                                    </button>
                                </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 d-none d-md-block">
                    <div className="d-flex justify-content-end">
                        <img
                            src={restaurant.photo && restaurant.photo.images.large.url != ""  ? restaurant.photo.images.large.url :"/images/restaurant_eating.jpg"}
                            alt="avatar"
                            width="400px"/>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default RestaurantItem;