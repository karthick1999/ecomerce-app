import React from 'react';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CartDetialsComponent from '../components/CartDetialsComponent'; 
import { getitem } from '../reducers/cartSlice';

// import 

function ItemDetials(props) {
    const location =useLocation(); 
    const dispatch=useDispatch(); 
    const currentItem=useSelector((state) =>state.cart.currentitem);
    console.log("detials screen data ",currentItem);

    useLayoutEffect(() => {
        console.log("location ", location);
        let currentItem = location.pathname.split('/'); 
        dispatch(getitem(currentItem[currentItem.length - 1]))
        console.log("item name ",  currentItem[currentItem.length - 1]);
    }, [location])

    return (
        <div className='item-detials'>
            <CartDetialsComponent item={currentItem} />
        </div>
    );
}

export default ItemDetials;