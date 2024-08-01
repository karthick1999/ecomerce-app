import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MenuItemComponent from '../components/MenuItemComponent'; 
import "../styles/menucomponent.css";

function MenuItemPage(props) {
    const navigate = useNavigate() 

    const menuItems=useSelector((state) =>state.cart.cartList);
    console.log("menuItems ",menuItems);

    const goToOrders = () => {
        navigate("/orders")
    }
    return (
        <div className='menu-parent'>
            <div className='menu-list-container'> 
            <div className='left-conatiner'>

           
            {menuItems.length? menuItems.map((item) =>{  
                if(item.count){
                    return <MenuItemComponent  item={item}/>

                }
            }):''}
             </div>
                
            </div>
            <div className='calculation-container'>
            <div className='right-conatiner'>
                <p>Summary</p>
                {menuItems.length? menuItems.map((item) =>{  
                      if(item.count)
                        return <div>
                            <span>{item.strMeal} </span>   {item.count} x {10} = {item.count*10}</div>
                }):''}

                <button type="button" class="btn btn-primary" onClick={goToOrders}>Place Order</button>
            </div>
            </div>
        </div>
    );
}

export default MenuItemPage;