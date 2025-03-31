import React, { useState } from 'react'
import quickcart from '../../../images/quickcart.png'
import users from '../../../images/users.png'
import ListPage from './ListPage';

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className='min-w-[320px] w-[100%] flex flex-col justify-between bg-gray-100 shadow-2xs mb-2  z-100' >
                {/* >= md screen */}
                <div className='flex justify-between items-center w-[80%] max-w-screen-lg mx-auto'>
                    <div
                        className='flex justify-between items-center gap-10'>
                        {/* logo */}
                        <img
                            className='w-[80px] h-[80px]'
                            src={quickcart} alt="logo quickcart" />

                        {/* NavLink */}
                        <ul className='hidden md:flex justify-between items-center text-xl font-extrabold gap-10 text-nowrap transition duration-300 relative'>
                            <ListPage />
                            {/* Categories Dropdown */}

                        </ul>
                        {/* end NavLink */}
                        <div />

                    </div >

                    {/* search  */}
                    <div className='hidden lg:block' >
                        <form className='flex items-center h-full gap-5'>
                            <input
                                className='w-[200px] border rounded-[5px] text-[16px]  p-1'
                                type="text" />
                            <svg
                                className='w-[35px] h-[35px]'
                                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                            </svg>
                        </form>
                    </div >
                    {/*end search  */}

                    {/* User profile */}
                    <button className='hidden md:flex text-xl font-extrabold flex-col items-center transition-all duration-300'>
                        {/* Write event onClick to dropdown menu for settings and Sign out button */}
                        <img className='w-[50px] h-[50px] rounded-[50%]' src={users} alt="User Profile" />
                        <h4 className='text-[16px] font-light'>Hengly</h4>
                    </button>
                    {/* end User profile */}
                    {/* menu moblie screen */}
                    <button
                        className='w-[45px] flex md:hidden '
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                        </svg>
                    </button>
                    {/* end menu moblie screen */}
                </div >
                {/* end >= md screen */}

                {/* dropdown moblec screen */}
                <ul
                    className={` ${isMenuOpen ? "flex" : "hidden"}  mx-auto flex-col gap-[10px] pb-[10px] w-[80%] w-max-screen-lg md:hidden`}>
                    <button className=' flex md:hidden text-xl font-extrabold flex-col items-center transition-all duration-300'>
                        {/* Write event onClick to dropdown menu for settings and Sign out button */}
                        <img className='w-[50px] h-[50px] rounded-[50%]' src={users} alt="User Profile" />
                        <h4 className='text-[16px] font-light'>Hengly</h4>
                    </button>
                    <ListPage />

                </ul >
            </nav >
        </>
    )
}

export default NavBar