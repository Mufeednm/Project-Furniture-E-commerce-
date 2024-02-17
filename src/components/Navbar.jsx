import React, {  useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useContext } from 'react';
import UseeContext from '../Globalcontext/UseConstext';


const Navbar = () => {

  
  // console.log( "headpage", logins.name);
  const {user,setUser,logins,setLogins , }=useContext(UseeContext)

   const handleLogout = ()=>{
    setLogins(null)
    navigate("/")
   }
  
  const navigate = useNavigate();
  const [searchData, setsearchData]=useState("")
  const handleclick= (e)=>{
    e.preventDefault();
    navigate(`/Search/${searchData}`);
    setsearchData("")

  
  }
  return (

    <div className='Navbar , bg-white'>


      <div className='navbar ,  flex justify-between '>

        <Link to={"/"}> <h2 className=' text-5xl'>FurniBreeze</h2></Link>


        <form onSubmit={handleclick} className='' >
       <input type="text" 
        placeholder='Search' 
        onChange={(f)=>setsearchData(f.target.value)}
        value={searchData}
        /></form>
    

        <div className="flex items-center gap-4 " >
        
        <p  className=''> { logins ? logins.name : "not logged"}</p>
  <div> 
    <button onClick={handleLogout}> <CiLogout /></button>
       </div>
          <Link to={"/signup"} >
        
            
            <button className="text-4xl">  
              <FaUser /></button></Link>
  
             <div className='admin' >   
               <button onClick={()=>navigate("/AdminLogin")} className="text-4xl" > <RiAdminFill /></button>
             </div>
            <div className='cart button'>
            

         <button  onClick={()=>{logins? navigate("/cart") : navigate("/Signin") }} className='text-4xl p-0 flex'> 
         
         <span className=' text-xs p-0'>
         {logins && logins.cart.length}
         </span> 
         <AiOutlineShoppingCart />
          </button> 
            </div>
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