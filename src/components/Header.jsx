import React from 'react'
import logo from "../../public/images/logo.png";

function Header() {
  return (
    <div className=' flex justify-between items-center px-2 py-10'>

        <div >
        <img src={logo} alt=""
        className='w-[300px]'
        />
        </div>

        <div>
            <ul className='list-none text-2xl flex justify-evenly gap-8'>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Contact Us</li>
                
            </ul>
        </div>
        <div>
            <button className='bg-red-500 p-5 rounded text-2xl text-white'>+91 8826961363</button>
        </div>

    </div>
  )
}

export default Header