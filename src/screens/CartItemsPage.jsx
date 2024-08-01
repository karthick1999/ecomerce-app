import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setItem } from '../reducers/cartSlice';

import { apiUrl } from '../common/comon';
import CartItemComponent from '../components/CartItemComponent';

import "../styles/cartpage.css"

function CartItemsPage(props) {

    const [data, setData] = useState([]);

    const cartListReducer =useSelector(state =>state.cart.cartList);
    console.log("cartListReducer ",cartListReducer);
    const dispatch = useDispatch();


    let location = useLocation();


    useLayoutEffect(() => {
        console.log("location ", location);
        let cartname = location.pathname.split('/');
        fetchCartDate(cartname[cartname.length - 1])
        console.log("cart name ", cartname);
    }, [location])


    useEffect(() => {
        console.log("data  cart items ", data);
    }, [data])


    async function fetchCartDate(name) {
        console.log("fetch ", name);
        try {
            const response = await fetch((apiUrl.cartitems) + name, { method: 'GET' });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const result = await response.json();
            console.log("result ", result);
            if (result.meals) {
                dispatch(setItem(result.meals))
                setData(result.meals);

            }
            else{
                alert('No Data to display ....'); 
                window.location.href="/"
            }
        } catch (error) {
            setData(null);
        }
    }


    return (
        <div className='cart-page-container'>
            {cartListReducer === null ? 'No data available ' :
                cartListReducer.map((item, index) => {
                    return <CartItemComponent price={index + 10} title={item.strMeal}  count={item.count} id={item.idMeal} image={item.strMealThumb}/>
                })
            }

        </div>
    );
}

export default CartItemsPage;