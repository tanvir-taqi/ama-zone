import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewProduct.css'

const ReviewProduct = ({ product,handleReviewDelete}) => {
    const {id, name, img, price, quantity } = product
    return (
        <div className='review-product'>
            <img src={img} alt="" />

            <div className="review-content">
                <div className="review-info">
                <h5>{name}</h5>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                </div>
                <button className='btn-dlt' onClick={()=>handleReviewDelete(id)}>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
            </div>



        </div>
    );
};

export default ReviewProduct;