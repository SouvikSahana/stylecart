import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
// import { useStateValue } from './StateProvider';
// import { auth } from '../firebase';

const Header = () => {
    // const [state,dispatch]=useStateValue()
    // const handleAuthentication=()=>{
    //     if(state.user){
    //         auth.signOut()
    //     }
    // }
  return (
    <div className="header">
        <div className='header_left'>
        <Link to="/">
        <img src="https://i.ibb.co/g6snh8x/Screenshot-from-2024-01-17-13-08-03.png" alt="header logo" className="header_logo" />
        </Link>
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
        </div>
        </div>
        <div className="header_nav">
            {/* <Link to={!state.user && "/signin"} style={{textDecoration:"none"}}> */}
            <Link to="/signin" style={{textDecoration:"none"}}>

            {/* <div className="header_option" onClick={handleAuthentication}> */}
            <div className="header_option" >

                <span className="header_optionLineOne">Hello Guest</span>
                {/* <span className="header_optionLineTwo">{state.user?"Sign Out":"Sign IN"}</span> */}
                <span className="header_optionLineTwo">Sign IN</span>

            </div>
            </Link>
            <div className="header_option">
            <span className="header_optionLineOne">Return & </span>
                <span className="header_optionLineTwo">Orders</span>
            </div>
            <div className="header_option">
            <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Wishlist</span>
            </div>
            
            {/* <Link to="/checkout"> */}
            <div className="header_optionBasket">
            {/* <span className="header_optionLineTwo header_basketCount">{state.basket?.length}</span> */}
            <span className="header_optionLineTwo header_basketCount">0</span>

                <ShoppingBasketIcon className='header_shoppingBAsketIcon'/>
            </div>
            {/* </Link> */}
        </div>
    </div>
  )
}

export default Header