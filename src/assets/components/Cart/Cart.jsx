import React from 'react'
import Button from '../Button'

function Cart({ discountPercentage, thumbnail, title, price, description }) {

    return (
        <div className='w-auto h-auto px-10 py-5 flex flex-col items-center bg-white group relative hover:shadow'> {/* max-w-[295px] max-h-[305px] */}
            {/* discout % */}
            {
                discountPercentage && (
                    <span
                        className='p-1 w-auto rounded-[5px] bg-black text-white font-extrabold text-[12px] absolute flex items-center justify-center top-2 right-5 z-20
                transition-opacity duration-300 group-hover:blur-[1px]  group-hover:opacity-80
                '>
                        {discountPercentage}% off
                    </span>
                )
            }

            {/* image */}
            <div className='flex justify-center items-center '>
                <img
                    className='border-2 rounded-[5px] w-full relative group-hover:blur-[1px] group-hover:opacity-800'
                    src={thumbnail}
                    alt={title}
                />
                <Button title="Buy now" addStyle="opacity-0 transition-opacity duration-300  group-hover:opacity-100 absolute " />
            </div>

            {/* title */}
            <h3
                className='text-[16px]  transition-opacity duration-300 line-clamp-1 group-hover:blur-[1px] group-hover:opacity-800 '
            >{title}</h3>

            {/* detail */}
            <div
                className='w-full flex justify-between place-items-baseline text-[16px] transition-opacity duration-300 group-hover:blur-[1px] group-hover:opacity-800'
            >
                <div className='flex flex-col'>
                    <span className='font-bold text-[18px]'>${(price - (discountPercentage / 100 * price)).toFixed(2)}</span>
                    <span className='font-bold text-[12px] line-through'>${price}</span> {/* price */}
                </div>
                <span className='text-[12px]'>⭐️⭐️⭐️⭐️⭐️</span> {/* rating star */}
            </div>

            <p
                className='text-[12px] line-clamp-2 text-slate-600 transition-opacity duration-300 group-hover:blur-[1px] group-hover:opacity-800'>
                {description}
            </p>
        </div>
    )
}

export default Cart