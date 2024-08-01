import React from 'react';

import "../styles/category-card.css";

import defaultImg from "../images/default-image.png";
import { useNavigate } from 'react-router-dom';

function CategoryCardComponent(props) {
   
    const navigate = useNavigate();


    const goToCart = (name) => {
        console.log("name ", name);
        navigate('/item/'+name)
    }
    return (
        <div className='Category-card-parent'>
            <div class="card top-card" >
                <img src={props.image ?? defaultImg} class="card-img-top" alt="category" ></img>
            </div>
            <div class="card-body bottom-card">
                <p class="card-text" onClick={() => goToCart(props.categoryname)}>
                    {props.categoryname ?? 'catergory-x'}
                </p>
            </div>


        </div>
    );
}

export default CategoryCardComponent;