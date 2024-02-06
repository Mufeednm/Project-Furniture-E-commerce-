import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";


const Navbar = () => {
  return (

    <div className='Navbar , bg-white'>


      <div className='navbar ,  flex justify-between '>

        <Link to={"/"}> <h2 className=' text-5xl'>FurniBreeze</h2></Link>

        <div className="flex gap-0" >
        

          <Link to={"/cart"} ><button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-8 py-3 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'><AiOutlineShoppingCart /></button></Link>
          <Link to={"/signin"} ><button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Sign in</button></Link>
          <Link to={"/signup"} ><button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Sign up</button></Link>
        </div>

      </div>

      <div className='categoty , bg-orange-300'>

        <div className='flex justify-around p-5'>
          <Link to={"/Sofas"} > <button>Sofas</button> </Link>
          <Link to={"/Beds"} > <button>Beds</button> </Link>
          <Link to={"/Table"} > <button>Table</button> </Link>
          <Link to={"/Chairs"} > <button>Chairs</button> </Link>
          <Link to={"/Diningsets"} > <button>Dining sets</button> </Link>
          <Link to={"/Wardrobes"} > <button>Wardrobes</button> </Link>
        </div>

      </div>






      
      <div></div>

    </div>
  )
}

export default Navbar