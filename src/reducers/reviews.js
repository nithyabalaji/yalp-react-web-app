const reviews = (state=[], action) => {
    switch (action.type) {
        case 'find-all-reviews':
            return action.reviews;
        case 'find-reviews-by-rid':
            return action.reviews;
        case 'delete-review':
            const newReviews =
                state.filter(review => review._id !== action.review._id);
            return newReviews;
        case 'create-review':
            return (
                [
                    action.review,
                    ...state
                ]
            );
        default:
            return state;
    };
};

export default reviews;
