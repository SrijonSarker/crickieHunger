import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='p-6'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
    );
};

export default Home;