import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantInfo from "../RestaurantInfo";
import "./detailsScreen.css";
import Navigation from "../Navigation";
import AddReview from "./AddReview";
import { useDispatch, useSelector } from "react-redux";
import { findReviewsByRestaurantId } from "../Server/review/client";
import ReviewItem from "../Reviews/ReviewItem";
import { fetchDetails } from "../Server/api/client";
import { getUser } from "../Server/users/client";

const Details = () => {
  // assuming path is /details/:id
  const { id } = useParams();
  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = useState({});
  const reviews = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    fetchDetails(id).then((data) => setRestaurant(data));
    findReviewsByRestaurantId(id, dispatch);
  }, []);

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);

  return (
    <div>
      <div>
        <Navigation active="find" />
      </div>
      <div className="mb-5">
        <RestaurantInfo restaurant={restaurant} />
      </div>
      <div className="mb-5">
        <h1>Reviews</h1>
        <div>
          {reviews.length === 0 && <span>No Reviews Yet</span>}
          <ul className="list-group">
            {reviews.map((review) => {
              return <ReviewItem review={review} />;
            })}
          </ul>
        </div>
      </div>
      <div className="mb-5">
        <h1>Add a Review</h1>
        {user && user.role === "USER" && (
          <AddReview restaurant={restaurant} user={user} />
        )}
        {!user && (
          <div className="alert alert-danger">
            Please login to add a review.
          </div>
        )}
        {user && user.role !== "USER" && (
          <div className="alert alert-danger">Only user can add a review.</div>
        )}
      </div>
    </div>
  );
};

export default Details;
