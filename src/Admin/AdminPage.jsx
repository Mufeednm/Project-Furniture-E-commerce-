import React from 'react'
import { useNavigate } from 'react-router-dom'


const AdminPage = () => {
  const navigate = useNavigate()
  return (
    <div className='h-screen '>
         <div className='bg-slate-400 text-center text-5xl rounded-lg pt-10 pb-10  m-20 font-bold ' >
          <h1>ADMIN</h1>
         </div>
         <div className='   flex text-center justify-center  p-5 font-medium gap-6 '>
          <button  onClick={()=>navigate("/Userslist")}  className=' rounded-md bg-slate-200 p-5 hover:bg-slate-600 hover:text-white'>USERS</button>
          <button onClick={()=>navigate("/Productedit")} className=' bg-slate-200 rounded-md p-5  hover:bg-slate-600 hover:text-white'>Product Details</button>
          <button onClick={()=>navigate("/Addproduct")} className=' bg-slate-200 rounded-md p-5  hover:bg-slate-600 hover:text-white'>ADD Product </button>
          <button onClick={()=>navigate("/")} className=' bg-slate-200 rounded-md p-5  hover:bg-slate-600 hover:text-white'>HOME PAGE </button>
         </div>
    
    
    
    
    </div>
  )
}

export default AdminPage