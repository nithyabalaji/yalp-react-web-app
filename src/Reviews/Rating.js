import React from 'react';

const Rating = ({rating}) => {
    if (rating < 2) {
        return(
            <i className="fas fa-star"></i>
        )
    } else if (rating < 3) {
        return(
            <>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </>
        )
    } else if (rating < 4) {
        return (
            <>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </>
        )
    } else if (rating < 5) {
        return (
            <>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </>
        )
    } else {
        return (
            <>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </>
        )
    }
};

export default Rating;