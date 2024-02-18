import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminPage = () => {
  const navigate = useNavigate()
  return (
    <div className='h-screen bg-zinc-700  flex items-center justify-center '>
         
         <div className=' flex  gap-4 '>
          <button  onClick={()=>navigate("/Userslist")}  className=' bg-slate-200'>USERS</button>
          <button onClick={()=>navigate("/Productedit")} className=' bg-red-600'>Product Details</button>
         </div>
    
    
    
    
    </div>
  )
}

export default AdminPage