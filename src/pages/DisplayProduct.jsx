import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useContext } from 'react';
import UseeContext from '../Globalcontext/UseConstext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const DisplayProduct = () => {

   const navigate = useNavigate()
   
  const { user, setUser, logins, setLogins, cart, setCart, mydata, setMydata, render, setRender ,products} = useContext(UseeContext);
  const { id } = useParams();
  useEffect(()=>{
      const filterdata = products.find((e) => e.id == id);
    setMydata(filterdata)
  },[id,setMydata])



  const addToCart = () => {
    // Check if the item is already in the cart
    const alreadyInCart = logins.cart.some((item) => item.id === mydata.id);

    // If not already in the cart, add it
    if (!alreadyInCart) {
      logins.cart.push({ ...mydata, qty: 1 });
    }

    setRender(!render);
    console.log(logins.cart);
  };

  return (
    <div>
<Navbar/>
    <div>

    <div className='m-10 flex p-14 bg-slate-400'>
      <img className='h-auto max-w-xl' src={mydata.image} />
      <div className='flex flex-col ml-20'>
        <h1 className='text-3xl font-medium '>{mydata.title}</h1>
        <p className='mt-3 text-gray-600 font-semibold w-96 text-2xl'>{mydata.description}</p>
        <h1 className='text-2xl font-semibold p-3 text-gray-600'>
          {' '}
          <span className='text-red-500'> ₹{mydata.price} </span>{' '}
          <span className=' line-through ml-5'>₹{mydata.crossprice} </span>{' '}
        </h1>
        <div></div>
        {/* <button className='bg-orange-300 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full' onClick={addToCart}>
          Purchase
        </button> */}
        <button onClick= { logins ?   addToCart : ()=>navigate("/Signin")} className=" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Add To Cart</button>
      </div>
    </div>
          </div>
        <Footer/>
        </div>
  );
};

export default DisplayProduct;
