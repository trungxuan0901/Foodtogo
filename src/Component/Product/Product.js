import React, { useState } from 'react'
import '../Product/Product.css'
import {useStateValue} from '../StateProvider'
import ShoppingBasket  from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'

function Product ({id,title,image, price, rating}){
    const [{basket},dispatch]= useStateValue()
    const addToBasket = () =>{
        dispatch({
        type:'ADD_TO_BASKET',
        item:{
            id:id,
            title:title,
            image: image,
            price: price,
            rating: rating
            }
        }) 
    }
    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>{price}</strong>
                    <small>$</small>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <p>*</p>
                        ) )
                    }

                </div>

            </div>
            <img src={image} alt="hinh anh"/>
            {/* <button onClick={addToBasket}>Add to Basket</button> */}
            <Link>
                    <div className="product_basket" onClick={addToBasket}>
                     <ShoppingBasket  />
                    </div>
                 
            </Link>

        </div>

    )
}

export default Product;