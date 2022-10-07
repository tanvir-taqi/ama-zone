import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewProduct from '../ReviewProduct/ReviewProduct';

const Orders = () => {

    const {products,savedCart} = useLoaderData()
    const [cart,setCart] = useState(savedCart)
    const handleReviewDelete =(id)=>{
        const newCart = cart.filter(nc=> nc.id !==id)
        setCart(newCart)
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
             {
                cart.map(product => <ReviewProduct
                key={product.id}
                product={product}
                handleReviewDelete={handleReviewDelete}
                ></ReviewProduct>)
             }
            </div>
            <div className="cart-container">
              <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Orders;