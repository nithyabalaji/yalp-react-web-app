import React from "react";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../Server/review/client";
import { convertDate } from "./convertDate";
const selectUser = (state) => state.user;

const ReviewItem = ({ review }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const deleteOwnReview = () => {
    deleteReview(review, dispatch);
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-2 d-none d-md-block text-center">
          <img
            alt="avatar"
            src={review.user && review.user.avatarIcon}
            className="rounded-circle d-none d-md-inline"
            width="110px"
          />
        </div>
        <div className="col-12 col-md-10">
          <div className="d-flex flex-column">
            <img
              alt="icon"
              src={review.user && review.user.avatarIcon}
              className="rounded-circle d-block d-md-none"
              width="100px"
            />
            <div className="d-flex align-items-center">
              <div className="col-10 rf-font-18px rf-font-bold">
                {review.user && review.user.username}
              </div>
              <div className="col-2 d-flex justify-content-end">
                <Rating rating={review.rating} />
              </div>
            </div>
            <div className="rf-color-darkgray">{convertDate(review.date)}</div>
            <div className="rf-font-18px">{review.content}</div>
            {user && review.user && user.username === review.user.username && (
              <button
                className="btn btn-outline-secondary rounded-pill rf-small-btn text-center mt-2"
                onClick={deleteOwnReview}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
