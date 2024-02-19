import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UseeContext from '../Globalcontext/UseConstext'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
const Productedit = () => {
  const {products,setProducts} =useContext(UseeContext)
  const removeCart = (id) => {
    // let itemremove = products.filter((v) => v.id != id);
    // products = itemremove;
    // 0;
    setProducts(oldProduct=>(   oldProduct.filter((v) => v.id != id) )
      
    )
  };
  const navigate =useNavigate()
  return (
    <div className="p-1 bg-slate-600">
        <Link to={"/AdminPage"} >
          <button          
              className="text-white bg-slate-400 hover:bg-slate-500 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"> 
              <IoMdArrowBack /> </button>
              </Link>
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
                  onClick={() => removeCart(value.id)}
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