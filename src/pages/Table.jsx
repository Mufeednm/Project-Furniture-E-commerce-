import React from 'react'
import { DummyProducts } from './data'
import { useNavigate } from 'react-router-dom'
const Table = () => {
  const nav =useNavigate()
  return (
    <div>Table


<div className='grid grid-cols-3 gap-4'>
        
        {DummyProducts.filter((value)=>value.type==="table").map((e)=>(
          
          
              <div className="bg-slate-200">
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