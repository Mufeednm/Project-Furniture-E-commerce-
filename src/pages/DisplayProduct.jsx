import React from 'react' 
import { useParams } from 'react-router-dom'
import { DummyProducts } from './data'
const DisplayProduct = () => {
    const {id}= useParams()
    const product=DummyProducts.filter((e)=>e.id==id)
    
    return (
        <div className='m-10 flex p-14  bg-slate-400'>

    
        
        <img  className='h-auto max-w-xl'src={product[0].image}/>
        <div className='flex flex-col ml-20'>
            <h1 className='text-3xl font-medium '>{product[0].title}</h1>
            <p className='mt-3 text-gray-600 font-semibold w-96 text-2xl'>{product[0]. description}</p>
            <h1 className='text-2xl font-semibold p-3 text-gray-600'>   <span className='text-red-500'>  ₹{product[0].price} </span>  <span className=' line-through ml-5'>₹{product[0].crossprice}  </span>   </h1> 
<div>
    
</div>
             
            <button class="bg-orange-300 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full"> Puchese</button>
            <button class=" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Add To Cart</button>
        </div>


        



    </div>
  )
}

export default DisplayProduct