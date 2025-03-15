import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    
        <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left Seaction */}
        <div>
            <img className='mb-5 w-40' src="/QDL.png" alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Book your doctor’s appointment with ease! Get instant access to top healthcare professionals and schedule visits at your convenience. Your health, our priority.</p>
        </div>
        {/* Center Seaction */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        {/* Right Seaction */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>QuickDoc@gmail.com</li>
            </ul>
        </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>© 2025 QuickDoc | All Rights Reserved | Copyright Subhendu Das</p>
        </div>
    </div>
  )
}

export default Footer