import React from 'react'
import { DummyProducts } from '../pages/data'
const Productedit = () => {
  return (
    <div className="p-1">
      <h2 className="text-center">Products</h2>
      <div className="grid-cols-1">
        {DummyProducts.map((value, index) => {
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
                    // onClick={() => handleDecrement(value)}
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
        {/* <div className=" text-center font-bold text-2xl">
          <h1>
            Total ={" "}
            {logins.cart.reduce(
              (acc, value) => (acc += value.price * value.qty),
              0
            )}
          </h1>
        </div> */}
      </div>
      </div>
  )
}

export default Productedit