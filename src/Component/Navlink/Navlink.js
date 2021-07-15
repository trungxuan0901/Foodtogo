import React from 'react';
import { Link } from 'react-router-dom';
import '../Navlink/Navlink.css'


function Navlink () {
    return(
        <div className="navlink">
                <div className="navlink__outer">
                    <Link >Thực Đơn</Link>
                    <Link >Deal 199k</Link>
                    <Link >Đặt bàn</Link>
                    <Link >Khuyến mãi</Link>
                    <Link >Liên hệ</Link>

                </div>
        </div>
    )
}

export default Navlink