import React from 'react';
import { useSelector } from 'react-redux';

function OrdersPage(props) {
    const billItems=useSelector((state) =>state.cart.cartList);
    console.log("billItems ",billItems);

    return (
        <div>
            <p>Ordersss</p>
            {billItems.map((item ) =>{
                if(item.count)
                    return (<div className="menu-conatiner">


                        <div className="left"> 
                        <div>
                            <img src={item.strMealThumb} alt='menu-item' /> 
                            </div> 
                            <div>

                            <p>{item.strMeal}</p>
                            <p> 10</p> 
                            </div>
                        </div> 
                        <div className="right">
                            <p>{item.count} x {item.count*10}</p>
                        </div>


                    

                    </div>)})
            }
          

        </div>
    );
}

export default OrdersPage;