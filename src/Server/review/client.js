const REVIEW_API = 'http://localhost:4000/api/reviews';

export const findAllReviews = (dispatch) =>
    fetch(REVIEW_API, {
        method: 'GET',
    })
        .then(response => { console.log("fetch all reviews", response.json); return response.json() })
        .then(reviews => dispatch({
            type: 'find-all-reviews',
            reviews
        }));


export const findReviewsByRestaurantId = (id, dispatch) =>
    fetch(`${REVIEW_API}/${id}`)
        .then(response => response.json())
        .then(reviews => dispatch({
            type: 'find-reviews-by-rid',
            reviews
        }));

export const findReviewsByLocalRestaurantId = (id, dispatch) =>
    fetch(`${REVIEW_API}/local/${id}`)
        .then(response => response.json())
        .then(reviews => dispatch({
            type: 'find-reviews-by-rid',
            reviews
        }));


export const createReview = (review, dispatch) =>
    fetch(REVIEW_API, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(review => dispatch({
            type: 'create-review',
            review
        }));

export const deleteReview = (review, dispatch) =>
    fetch(`${REVIEW_API}/${review._id}`, {
        method: 'DELETE'
    })
        .then(response => dispatch({
            type: 'delete-review',
            review
        }));








