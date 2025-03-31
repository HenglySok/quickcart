import React from 'react'
import quickcart from '../../../images/quickcart.png'
import navLink from '../../services/navLink'
import { NavLink } from 'react-router'

function Footer() {
    return (
        <footer className='flex flex-col justify-center items-center mt-3 bg-gray-200 py-3'>
            <img
                className='w-[85px]'
                src={quickcart} alt="logo" />

            <h3 className='text-xl font-bold'>
                <span className='text-[var(--color-primary-900)]'>Quick</span>
                <span className='text-[var(--color-secondary-900)] text-center'>Cart </span>
                Your Best Choice for Online Shopping
            </h3>

            <ul className='w-full text-center' >
                {
                    navLink.map((item) => (
                        <li
                            className='text-xl font-bold text-slate-900 transition duration-300 hover:text-[var(--color-primary-900)] hover:underline'
                            key={item.path}>
                            <NavLink to={item.path}>{item.title}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <div className='w-full bg-slate-900'>
                <h3 className='w-full text-center text-white font-bold text-xl p-3'>&copy;Copyright by QuickCart</h3>
            </div>
        </footer>
    )
}

export default Footer