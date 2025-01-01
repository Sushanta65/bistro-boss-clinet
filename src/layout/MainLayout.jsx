import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const MainLayout = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Navbar />
            <Outlet/>
            <Footer />
        </div>
    );
};

export default MainLayout;