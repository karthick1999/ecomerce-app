import React from 'react';

import { useNavigate } from 'react-router-dom';

import cartIcon from "../images/shopping-cart.png";
import settingIcon from "../images/settings.png";

import "../styles/header.css";
import { useSelector } from 'react-redux';

function Header() { 

const totalcount =useSelector((state) =>state.cart.totalcount)
    const navigate=useNavigate();


    const goToOrders = () =>{
navigate('/menulist')
    }
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">E-commerce-Bucket</a>
                    <form class="d-flex header-icons" >
                        <img src={cartIcon} alt='cart' onClick={goToOrders} />
                        <span>{totalcount===0?'':totalcount}</span>
                        <img src={settingIcon} alt='setting' />

                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Header;