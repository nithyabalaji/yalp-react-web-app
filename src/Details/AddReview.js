import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { createReview } from '../Server/review/client';
import {useNavigate} from "react-router-dom";

const AddReview = ({restaurant, user}) => {
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(3);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createHandler = () => {
        const newReview = {
            restaurant,
            user,
            content,
            rating,
            date: new Date()
        }
        createReview(newReview, dispatch)
        .then(status => {
            if (restaurant.location_id) {
                navigate(`/details/${restaurant.location_id}`);
            } else {
                navigate(`/details/local/${restaurant._id}`);
            }
        });
    }

    return (
        <div className="bg-transparent">
            <div className="form-group">
                <div className="alert alert-success rd-font-20px">
                    Logged in as: <span>{user.username}</span>
                </div>
                <div for="review" className="form-label rf-font-20px rf-font-bold">
                    Review:
                </div>
                <textarea
                    className="form-control"
                    id="review"
                    placeholder="Add your review here."
                    onChange={(event) => {setContent(event.target.value)}}>
                </textarea>
            </div>
            <div className="mt-2 form-group">
                <div for="rating" className="form-label rf-font-20px rf-font-bold">
                    Rating:
                </div>
                <select
                    className="form-select"
                    onChange={(event) => {setRating(event.target.value)}}>
                    <option>1</option>
                    <option>2</option>
                    <option selected>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <button
                className="btn btn-primary purple mt-3"
                onClick={createHandler}>
                Add
            </button>
        </div>
    )
}

export default AddReview;
