import React from 'react'
import '../ProductCart/ProductCart.css'
import { useStateValue} from '../StateProvider'

// part 10

function ProductCart({id,title,image,price,rating}){
    
    const [{basket}, dispacth] = useStateValue()

    const removeItem = () => {
        dispacth({
            type:'REMOVE_FROM_CART',
            id: id
        })
    }

    return(
        <div className="productcart">
            <img className="productcart__image " src={image} alt ="" />
            <div className="productcart__info">
                <p className="productcart__title">{title}</p>
                <p className="productcart__price">{price}$</p>
            
                <div className="productcart__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) =>(
                        <span>*</span>
                    ))
                }
                </div>
                <button onClick={removeItem}>Xóa khỏi giỏ hàng</button>
            </div>
        </div>
    )

}
export default ProductCart