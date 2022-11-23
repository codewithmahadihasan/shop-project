import React, { useContext, useState } from 'react';
import Logo from '../images//Logo.svg'
import { NavLink } from 'react-router-dom';
import { Auth } from '../Context/AuthContext';
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(Auth)
    return (

        <div className='fixed w-full z-50 '>


            <div className="bg-gray-900">
                <div className="px-4   py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <NavLink
                            to="/"
                            aria-label="Amazon"
                            title="Amazon"
                            className="inline-flex items-center"
                        >
                            <img src={Logo} alt="" />

                        </NavLink>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <NavLink
                                    to="/shop"
                                    aria-label="Our product"
                                    title="Our product"
                                    className={({ isActive }) => {
                                        return isActive ? 'underline text-sky-500  underline-offset-8 font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400' : 'font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400';

                                    }}
                                >
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/order"
                                    aria-label="Our product"
                                    title="Our product"
                                    className={({ isActive }) => {
                                        return isActive ? 'underline text-sky-500  underline-offset-8 font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400' : 'font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400';

                                    }}
                                >
                                    Order
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/manageinventory"
                                    aria-label="Product pricing"
                                    title="Product pricing"
                                    className={({ isActive }) => {
                                        return isActive ? 'underline text-sky-500  underline-offset-8 font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400' : 'font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400';

                                    }}
                                >
                                    Manage Inventory
                                </NavLink>
                            </li>




                            {user ? <button onClick={logOut} className=' hover:text-sky-500 text-white font-bold underline-offset-8 font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400'>Sign Out</button> : <ul className='flex gap-8'>
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) => {
                                            return isActive ? 'underline text-sky-500  underline-offset-8 font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400' : 'font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400';

                                        }}
                                    >
                                        Log In
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/registration"
                                        className={({ isActive }) => {
                                            return isActive ? 'underline text-sky-500  underline-offset-8 font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400' : 'font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400';

                                        }}
                                    >
                                        Sign up
                                    </NavLink>
                                </li>
                            </ul>}

                            <li className='text-xl font-bold text-sky-500'>{user?.displayName}</li>

                        </ul>
                        <div className="lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                    />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div className="absolute top-0 left-0 w-full">
                                    <div className="p-5 bg-gray-700 border rounded shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <NavLink
                                                    to="/"
                                                    aria-label="Company"
                                                    title="Company"
                                                    className="inline-flex items-center"
                                                >
                                                    <img className='hover:bg-blue-400' src={Logo} alt="" />

                                                </NavLink>
                                            </div>
                                            <div >
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-blue-400 focus:bg-blue-200 :outline-none focus:shadow-outline"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul className="space-y-4  ">
                                                <li>
                                                    <NavLink
                                                        to="/shop"
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Shop
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/order"
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Order
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/orderrevew"
                                                        aria-label="Product pricing"
                                                        title="Product pricing"
                                                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Order Reverw
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/about"
                                                        aria-label="About us"
                                                        title="About us"
                                                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        About
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/manageinventory"
                                                        aria-label="About us"
                                                        title="About us"
                                                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Inventory
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="login"
                                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                                        aria-label="Sign up"
                                                        title="Sign up"
                                                    >
                                                        Log In
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Nav;