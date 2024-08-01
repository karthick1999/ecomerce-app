// src/components/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './HeaderComponent';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
