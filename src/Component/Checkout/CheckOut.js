import React from 'react'
import '../Checkout/CheckOut.css'
import Subtotal from '../Subtotal';
import {useStateValue} from '../StateProvider'
import ProductCart from '../ProductCart/ProductCart';
import '../ProductCart/ProductCart.css'

function CheckOut (){

    const [{basket}] = useStateValue()


    return(
        <div className="checkout">
            <div className="checkout__left">
                {
                    basket.lenght=== 0?(
                        <div>
                                <h2 className="checkout__title">Your Shopping basket empty</h2>
                                <p>You have no items your basket. Buy one.</p>

                        </div>

                    ):(
                        <div>
                            <h2 className="shoppingbaskettitle">Giỏ hàng của bạn</h2>
                            {
                                basket.map(item =>(
                                    <ProductCart
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                    ))
                            }
                        </div>
                    )
                }
             </div>
             {
                 basket.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal/>

                    </div>
                 )
             }
            

        </div>
    )
}
export default CheckOut;