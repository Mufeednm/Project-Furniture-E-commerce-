import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import UseeContext from '../Globalcontext/UseConstext'
const Table = () => {
  const {products} =useContext(UseeContext)
  const nav =useNavigate()
  return (
    <div>Table


<div className='grid grid-cols-3 gap-4'>
        
        {products.filter((value)=>value.type==="table").map((e , index)=>(
          
          
              <div key={index} className="bg-slate-200">
                <img
                  style={{ height: 500, padding: 10 }}
                  src={e.image}
                  alt=""
                  onClick={()=>nav(`/${e.id}`)}
                  />
  
                <div className="text-center p-3  ">
                  <h1 className="">{e.title}</h1>
                </div>
              </div>
  
  ))}
  </div>

    </div>
  )
}

export default Table