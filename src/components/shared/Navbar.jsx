import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {

    const navLinks = (
        <div className='flex gap-6 text-lg font-semibold'>
            <NavLink to={'/'} className={({isActive}) => isActive ? 'border-b-2 border-black' : ''}><li>Products</li></NavLink>
        </div>
    )

    return (
        <div className="navbar md:px-10 shadow-xl md:mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <Link href='/' className="text-2xl font-bold">ItemHunt</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/manageproduct'}><button className='btn btn-outline'><IoSettingsOutline /> Manage Product</button></Link>
            </div>
        </div>
    );
};

export default Navbar;