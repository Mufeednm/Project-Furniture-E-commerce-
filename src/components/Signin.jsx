import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UseeContext from '../Globalcontext/UseConstext'
const Signin = () => {
  const nav = useNavigate()
  const [gmail,setEmails]=useState ("")
  const [passwords,setPasswords]=useState ("")
  const loggs={gmail,passwords}
  const {user,setUser}=useContext(UseeContext)
  const handlesubmit = (e)=>{
    e.preventDefault()
    let userData = user.find((item)=>item.email==gmail)
    if (userData && userData.password==passwords) {
      setUser(userData)
      nav ('/')
      
    }else{
      setUser(null)
      alert("you are wrong")
    }
  }
  return (
    <div >
  
<form class="max-w-sm mx-auto , bg-orange-200 ">
  <div class="mb-5  ">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-90">Your email</label>
   
    <input type="email" onChange={(e)=>setEmails(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
 
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
    <input type="password" onChange={(e)=>setPasswords(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
       <Link to={"/"}>  <button onClick={handlesubmit} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
 </Link>
</form>


    </div>
  )
}

export default Signin