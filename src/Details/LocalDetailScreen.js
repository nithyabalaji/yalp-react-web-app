import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantInfo from "../RestaurantInfo";
import "./detailsScreen.css";
import Navigation from "../Navigation";
import AddReview from "./AddReview";
import { useDispatch, useSelector } from "react-redux";
import { findReviewsByRestaurantId } from "../Server/review/client";
import ReviewItem from "../Reviews/ReviewItem";
import { getUser } from "../Server/users/client";
import { findRestaurantById } from "../Server/restaurant/client";

const DetailsLocalScreen = () => {
  // assuming path is /details/local/:id
  const { id } = useParams();
  console.log("detail local screen", id);
  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = useState({});
  const reviews = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.user);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    findRestaurantById(id)
      .then((data) => {
        console.log("use effect", data);
        return setRestaurant(data);
      })
      .catch((e) => {
        setErrorMsg("Page not found");
        setRestaurant({});
      });
    findReviewsByRestaurantId(id, dispatch);
  }, []);

  console.log("detail local screen restaurants", restaurant);

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);

  return (
    <div>
      <div>
        <Navigation active="find" />
      </div>
      {errorMsg && <h5 className="alert alert-danger">{errorMsg}</h5>}
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

export default DetailsLocalScreen;
