import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { DummyProducts } from '../pages/data'


const Homepage = () => {

  return (

    <div className='homepage  , bg-white '>





      <Link to={"/Sofas"}>  <img className='p-2' src="https://hometown.gumlet.io/media/cms/icons/new-arrival2.jpg?w=1536&dpr=1.3" alt="" /> </Link>











      <div  className='  text-center' >
        <h1 className='text-3xl text-orange-900'> New arrivals </h1>
        <div className='  , flex  justify-center items-center gap-2'>
         
                {/* type 1 */}
                <Link to={"/Beds"}>
                
                <div className='bg-slate-200'>
                  <img    style={{ height: 500, padding: 10 }} src="https://homesofrajasthan.com/wp-content/uploads/2023/05/bd19p-860x860.jpeg" alt="" />

                  <div className='text-center p-3  '>
                    <h1 className=''>
                      BEDS
                    </h1>

                    <h1>  </h1>

                  </div>

                </div>
                </Link>

                {/* type 2 */}
                <Link to={"Sofas"}>
                <div className='bg-slate-200'>
                  <img    style={{ height: 500, padding: 10 }} src="https://homesofrajasthan.com/wp-content/uploads/2022/11/sauvage-chesterfield-leather-sofa-3-910x1155-1.jpg" alt="" />

                  <div className='text-center p-3  '>
                    <h1 className=''>
                    Premium  Leather Sofa
                    </h1>

                    

                  </div>

                </div>
                </Link>
              
                {/* type 3 */}
                <Link to={"/Table"}>
                <div className='bg-slate-200'>
                  <img    style={{ height: 500, padding: 10 }} src="https://homesofrajasthan.com/wp-content/uploads/2023/04/1-17.jpg" alt="" />

                  <div className='text-center p-3  '>
                    <h1 className=''>
                    First Class Dining Table 
                    </h1>

             

                  </div>

                </div>
                </Link>
              
              
          
          
        </div>
      </div>












      <div className='p-1'>
        <h2 className='text-center'>Items</h2>
        <div className='grid grid-cols-4'>
          {
            DummyProducts.map((value) => {
              return (
                <div className=''>
                  <img style={{ height: 500, padding: 10 }} src={value.image} alt="" />

                  <div className='text-center p-3 '>
                    <h1 className=''>
                      {value.title}
                    </h1>

                    <h1>  ₹{value.price}</h1>

                  </div>

                </div>
              )
            })
          }
        </div>
      </div>









    </div>
  )
}

export default Homepage