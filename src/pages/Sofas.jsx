import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import UseeContext from '../Globalcontext/UseConstext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Sofas = () => {
  const {products} =useContext(UseeContext)
  const nav =useNavigate()
  return (

<div>
<Navbar/>
    <div className=''>
      <div>
<img src="https://mysleepyhead.com/media/wysiwyg/uploads/HomePage/Sept30DesktopbannerSofa.jpg" alt="" />
      </div>

<h2>hellooo</h2>
<div className='grid grid-cols-3 gap-4'>
        
        {products.filter((value)=>value.type==="sofa").map((e,index)=>(
          
          
          
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
<Footer/>
            </div>
  )
}

export default Sofas