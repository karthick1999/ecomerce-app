import React from 'react';

import { useNavigate } from 'react-router-dom'; 

import { addItem,updateitem } from '../reducers/cartSlice';

import { useDispatch, UseDispatch } from 'react-redux';

function CartItemComponent(props) { 
    const dispatch =useDispatch();


    const navigate = useNavigate();


    const goToDetialsScreen = (id) => {
        console.log("navigate with id ",id);
        navigate('/details/'+id)
    }
    const handlerAddcart = (id) =>{ 
        console.log("id to be sent tpo add ",id);
        dispatch(addItem(id))

    }
const updatecartItemcount= (id,value) =>{
dispatch(updateitem({id,value}))
}

    return (

        <div class="card" >
            <img src={props.image} class="card-img-top" alt="... " style={{width:'200px' ,height:'200px'}} onClick={() =>goToDetialsScreen(props.id)} />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text"> {props.price}</p>
                {props.count ?
               
                    <div className='operation'>
                            <a href="#" class="btn btn-primary" onClick={() =>updatecartItemcount(props.id,1)}>+</a>
                            {props.count}
                            <a href="#" class="btn btn-primary" onClick={() =>updatecartItemcount(props.id,-1)}>- </a>
                       </div>:
                <div>
                <button type="button" class="btn btn-primary" onClick={() =>handlerAddcart(props.id)}>Add to cart</button>
                </div>
}
                    


            </div>
        </div>

    );
}

export default CartItemComponent;