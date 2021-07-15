import React from 'react';
// import logo from '../img/logo.jpg'
import SearchIcon  from '@material-ui/icons/Search'
import '../Headers/Header.css'
import {Link} from 'react-router-dom'
import ShoppingBasket  from '@material-ui/icons/ShoppingCartSharp';
import { useStateValue } from '../StateProvider';
import {auth} from '../firebase'

function Header(){
    const [{basket,loggedinuser}, dispatch]= useStateValue();

    const logoutUser = ()=>{
        if(loggedinuser){
            auth.signOut()
        }
    }
    return(
        <nav className="header">
            {/* <img className="header__logo" src={logo}  alt="logo"/> */}
            <div className="header__search">
                <input className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
            {/* 1st link */}
                <Link to= {!loggedinuser && "/login"} className="header_link">
                    <div onClick={logoutUser} className="header__option">
                        <span className="header__optionLineOne">Hello, {loggedinuser?.email}</span>
                        <span className="header__optionLineTwo">{loggedinuser ? 'Signout': 'Sign In'}</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header_link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Oder</span>
                    </div>
                </Link>
                {/* 3rd link */}
                {/* <Link to="/" className="header_link">
                    <div className="header__option">
                        <span className="header__optionLineOne">You</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link> */}
            </div>
            <Link to="/checkout" className="header_link">
                    <div className="header__optionBasket">
                        <ShoppingBasket/>   
                        <span className="header__optionLineTwo header__productCount">{basket?.length}</span>
                    </div>
                </Link>

        </nav>
    )
}

export default Header;