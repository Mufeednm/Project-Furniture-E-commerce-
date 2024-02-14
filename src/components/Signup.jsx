import React, { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Link  } from 'react-router-dom'
import UseeContext from '../Globalcontext/UseConstext'


const Signup = () => {
  const nav = useNavigate()

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const {user,setUser}=useContext(UseeContext)
const handlesubmit=(e)=>{
  const newuser={name,email,password}
  e.preventDefault()
  setUser([...user,newuser])
  console.log(user);
  
  nav ('/Signin')


}
  return ( <div>
<form className="max-w-sm mx-auto">
  <div className="mb-5">
  <label  className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
   
    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}  className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name" required  />

  </div>
  <div className="mb-5">
  <label  className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
    <input type="email"  onChange={(e)=>setEmail(e.target.value)} value={email} className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
 
  </div>
  <div className="mb-5">
  <label  className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>

    <input type="password"     onChange={(e)=>setPassword(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
 
  </div>

 
<Link to="/Signin">  <button onClick={handlesubmit} type="submit" className=" bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">All Ready have a Account</button></Link>
</form>



    </div>
  )
}

export default Signup