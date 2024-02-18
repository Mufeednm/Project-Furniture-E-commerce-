import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UseeContext from '../Globalcontext/UseConstext'
const Productedit = () => {
  const {products} =useContext(UseeContext)
  const navigate =useNavigate()
  return (
    <div className="p-1">
      <h2 className="text-center">Products</h2>
      <div className="grid-cols-1">
        {products.map((value, index) => {
          return (
            <div key={index} className="bg-orange-300 p-5 gap-3 m-2">
              <div className="flex justify-between">
                <img
                  style={{ height: 150, padding: 10 }}
                  src={value.image}
                  alt=""
                //   onClick={() => nav(`/${value.id}`)}
                />
                <div className="flex-grow mx-4">
                  <h1 className="text-lg font-bold">{value.title}</h1>
                  <h1 className="text-gray-600"> ₹{value.price}</h1>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() =>navigate(`/Adminproductedit/${value.id}`) }
                    className="ml-4 text-amber-200 "
                  >
          Edit
                  </button>
              
                </div>
                <button
                //   onClick={() => removeCart(value.id)}
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
   
      </div>
      </div>
  )
}

export default Productedit