import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const RestaurantInfo = ({ restaurant }) => {
  const photoURL = "http://localhost:3000/images/restaurant_eating.jpg"
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="mt-3 mb-3 d-float">
        <button
          className="float-end btn btn-outline-secondary"
          onClick={() => navigate(`/search`)}
        >
          Go back
        </button>
        <h1 className="rf-font-60px">{restaurant.name}</h1>
        {
          restaurant.author &&
          <Link to={`/profile/${restaurant.author}`}>
            <h6 className="purple">Host's Profile</h6>
          </Link>
        }
      </div>

      <div className="d-flex justify-content-center">
        <img
          src={
            restaurant.photo && restaurant.photo.images.large.url != ""
              ? restaurant.photo.images.large.url
              : photoURL
          }
          width="40%"
        />
      </div>

      <div className="card border-0 mt-3">
        <h1>Information</h1>
        {/*Display ranking string if any*/}
        <div>
          {restaurant.ranking && (
            <span className="badge bg-success rf-font-20px mb-3">
              {restaurant.ranking}
            </span>
          )}
        </div>

        {/*Beginning of information*/}
        <div className="card-header rf-font-20px">Phone</div>
        <div className="card-body">{restaurant.phone}</div>
        <div className="card-header rf-font-20px">Address</div>
        <div className="card-body">{restaurant.address}</div>
        <div className="card-header rf-font-20px">Description</div>
        <div className="card-body">{restaurant.description}</div>
        <div className="card-header rf-font-20px">Website</div>
        <div className="card-body">
          {restaurant.website && (
            <a href={restaurant.website} target="_blank">
              {restaurant.website}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
