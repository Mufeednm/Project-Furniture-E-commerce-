import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DummyProducts } from './data'
import { Link } from 'react-router-dom'
const Sofas = () => {
  const nav =useNavigate()
  return (


    <div className=''>
      <div>
<img src="https://mysleepyhead.com/media/wysiwyg/uploads/HomePage/Sept30DesktopbannerSofa.jpg" alt="" />
      </div>

<h2>hellooo</h2>
<div className='grid grid-cols-3 gap-4'>
        
        {DummyProducts.filter((value)=>value.type==="sofa").map((e,index)=>(
          
          
          
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

export default Sofas