import React, { useContext } from 'react'
import UseeContext from '../Globalcontext/UseConstext'
import { useNavigate } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Addproduct = () => {
  const {products,setProducts} =useContext(UseeContext)
  
  const navigate = useNavigate()
  const handlesubmit = (e)=>{
    e.preventDefault();
    let newdata = new FormData(e.target);
    let title = newdata.get("title");
    let  type = newdata.get("type");
    let price = newdata.get("price");
    let image = newdata.get("image");

    let newProduct = {
      id : Math.random()*10,
      title:title,
      type :type,
      price : parseFloat(price),
      image: URL.createObjectURL(image)
    };
    setProducts ([...products,newProduct]);
    // e.target.reset();
    navigate ("/Productedit")
  }
  return (
<div className='h-screen bg-zinc-700  flex items-center justify-center'> 

    <div className="max-w-sm mx-auto ">
    <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold pb-5">ADD PRODUCT</h2>
      <form onSubmit={(e) => handlesubmit(e)}>
        <div className="mb-5">
          <label htmlFor="titlee" className="block mb-2 text-sm font-medium">
            title
          </label>
          <input
            type="text"
            name='title'
      
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="Title"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="titlee" className="block mb-2 text-sm font-medium">
            type
          </label>
          <input
            type="text"
            name='type'
            
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="Type"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            PRICE
          </label>
          <input
            type="number"
            name='price'
            id="price"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="price"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium"
          >
            Image
          </label>
          <input
            type="file"
            name='image'
            id="password"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="*********"
            required
            />
        </div>
        <div>
          <p className="text-red-500 pb-5"></p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
          >
            ADD
          </button>
          <Link to={"/AdminPage"} >
          <button          
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"> 
              <IoMdArrowBack /> </button>
              </Link>
          
        </div>
      </form>
    </div>
  </div>
  </div>

)
}

export default Addproduct