import React from 'react';


import { apiUrl } from '../common/comon';

import "../styles/homepage.css"; 
import "../styles/categorypage.css";

import { useState } from 'react';
import { useEffect } from 'react';
import {useDispatch } from 'react-redux';

import CategoryCardComponent from '../components/CategoryCardComponent'; 

import { setCategories } from '../reducers/categorySlice';

function HomePage() {    
    const [data,setData]=useState([]);

    const dispatch = useDispatch();
  

useEffect(() =>{
fetchData();
   
},[])

const fetchData = async () => {
    try {
        const response = await fetch(apiUrl.categories,  { method: 'GET' });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json(); 
        console.log("result ",result); 
        if(result.meals){
            dispatch(setCategories(result.meals))
            setData(result.meals);
        }
        
      

    } catch (error) {
        setData(null);
    } 
};


    return (
        <div className='category-conatiner'>
            {data===null?'No Data ':
            data.map((item) =>{
                return <CategoryCardComponent  image={null} categoryname={item.strCategory}/>
            })
            }
        </div>
    );
}

export default HomePage;