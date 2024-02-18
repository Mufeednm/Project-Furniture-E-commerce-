import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import UseeContext from '../Globalcontext/UseConstext'
const Wardrobes = () => {
  const {products} =useContext(UseeContext)
  const nav =useNavigate()
return (
    <div>

      <figure className="relative max-w-5xl transition-all duration-500">
        <a href="#">
          <img
            className="max-w-screen-2xl"
            src="https://highdecora.co.uk/wp-content/uploads/2022/08/Fitted-Wardrobe_Banner-2.jpg"
            alt="image description"
          />
        </a>
        <figcaption className="absolute px-7 text-lg text-black bottom-6 w-full text-justify">
          <p>Beds of Dream </p>
        </figcaption>
      </figure>


<div className='grid grid-cols-3 gap-4'>
        
        {products.filter((value)=>value.type==="Wardrobe").map((e , index)=>(
          
          
              <div  key={index}  className="bg-slate-200">
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

export default Wardrobes