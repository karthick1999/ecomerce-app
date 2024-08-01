// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Provider } from 'react-redux';
import { store } from './reducers/store';

import HomePage from './screens/HomePage';
import CartItemsPage from './screens/CartItemsPage';
import OrdersPage from './screens/OrdersPage';
import ItemDetials from './screens/ItemDetials'; 
import MenuItemPage from './screens/MenuItemPage';
import MainLayout from './components/MainLayout'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Use MainLayout here
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/item/:id",
        element: <CartItemsPage />
      },
      {
        path: '/details/:id',
        element: <ItemDetials />
      },
      {
        path: "/orders",
        element: <OrdersPage />
      },
      {
        path:"/menulist", 
        element:<MenuItemPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    <RouterProvider router={router} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
