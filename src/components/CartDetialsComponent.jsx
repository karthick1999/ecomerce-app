import React from 'react';
import { useDispatch } from 'react-redux';

import { updatecurrentitem } from '../reducers/cartSlice';


function CartDetialsComponent(props) { 

    const dispatch=useDispatch();

    const updatecartItemcount = (value) => {
        dispatch(updatecurrentitem(value))
    }

    return (
        <div className='cart-detials'>

            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src={props.item.strMealThumb} alt='detials' />
                    </div>
                    <div class="col">
                        <p>{props.item.strMeal}  </p>
                        <p>
                            For example, here are two grid layouts that apply to every device and viewport, from xs to xl. Add any number
                            of unit-less classes for each breakpoint you need and every column will be the same width.</p>
                        {props.item.count ?

                            <div className='operation'>
                                <a href="#" class="btn btn-primary" onClick={() => updatecartItemcount( 1)}>+</a>
                                {props.item.count}
                                <a href="#" class="btn btn-primary" onClick={() => updatecartItemcount( -1)}>- </a>
                            </div> : ''}
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}

            export default CartDetialsComponent;