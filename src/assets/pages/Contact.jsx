import React from 'react'

const Contact = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center w-[80%] max-w-screen-lg mx-auto my-5'>
            <div className='w-full max-w-screen-lg mx-auto'>
                <h3
                    className='text-[22px]'>
                    <span
                        className='text-[var(--color-primary-900)]'
                    >Contact </span>
                    <span className='text-[var(--color-secondary-900)]'>Us</span>
                </h3>
                <p>We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, we’re here to help.</p>
                <ul className='list-disc'>
                    <li>Email: sokhenglystudent@gmail.com</li>
                    <li>Phone: 010 612 992</li>
                    <li>
                        Address: Prek Pnov, Prek Pnov, Phnom Penh</li>
                </ul>
            </div>
            <div
                className='w-full gap-2 bg-[var(--color-primary-700)] p-5 rounded-[5px] text-white'>
                <h3 className='text-[18px]'>
                    Feel free to reach me out in below Thank You!
                </h3>
                <form
                    className=' flex flex-col gap-2 text-[14px]'>
                    <label
                        htmlFor="">Your Email</label>
                    <input
                        className='border border-black rounded-[5px] w-[40%]'
                        type="email" />

                    <label htmlFor="">Your Name</label>
                    <input
                        className='border border-black rounded-[5px] w-[40%]'
                        type="text" />
                    <label htmlFor="">Your Message</label>
                    <textarea className='border border-black rounded-[5px] h-[100px]'></textarea>
                </form>
            </div>
        </div>
    )
}

export default Contact