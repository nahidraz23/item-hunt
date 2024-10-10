import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='grid grid-cols-12  h-screen'>
            <div className='col-span-3 bg-black'>
                <h1 className='text-white'>hello</h1>
            </div>
            <div className='col-span-9 bg-red-600'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;