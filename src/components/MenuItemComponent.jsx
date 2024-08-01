import React from 'react';
import { useDispatch } from 'react-redux';
import { updateitem } from '../reducers/cartSlice';

import "../styles/menucomponent.css";

function MenuItemComponent(props) {
    console.log("props ",props);

    const dispatch=useDispatch();

    const updatecartItemcount= (id,value) =>{
        console.log("++++++++",id,value);
        dispatch(updateitem({id,value}))
        }


    return (
       
        <div className="menu-conatiner">


            <div className="left">
                <img src={props.item.strMealThumb} alt='menu-item' />
                <p>{props.item.strMeal}</p>
                <p> 10</p>
            </div>
          

            <div className="right">
                <button type="button" class="btn btn-outline-success"  onClick={()=>updatecartItemcount(props.item.idMeal,1)}>+</button>
                <button type="button" class="btn btn-outline-primary">{props.item.count}</button>
                <button type="button" class="btn btn-outline-danger" onClick={()=>updatecartItemcount(props.item.idMeal,-1)}>-</button>
            </div>

        </div>
        
    );
}

export default MenuItemComponent;