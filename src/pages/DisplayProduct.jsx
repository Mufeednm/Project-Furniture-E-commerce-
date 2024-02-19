import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import UseeContext from '../Globalcontext/UseConstext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DisplayProduct = () => {
  const navigate = useNavigate();
  const {
    user,
    setUser,
    logins,
    setLogins,
    cart,
    setCart,
    mydata,
    setMydata,
    render,
    setRender,
    products,
  } = useContext(UseeContext);
  const { id } = useParams();
  useEffect(() => {
    const filterdata = products.find((e) => e.id == id);
    setMydata(filterdata);
  }, [id, setMydata]);

  const addToCart = () => {
    const alreadyInCart = logins.cart.some((item) => item.id === mydata.id);

    if (!alreadyInCart) {
      logins.cart.push({ ...mydata, qty: 1 });
    }

    setRender(!render);
    console.log(logins.cart);
  };

  return (
    <div>
      <Navbar />
      <div className="m-10 flex flex-col md:flex-row bg-slate-400 p-14">
        <img className="h-auto max-w-full md:max-w-xl" src={mydata.image} alt={mydata.title} />
        <div className="flex flex-col ml-0 md:ml-20 mt-6 md:mt-0">
          <h1 className="text-3xl font-medium ">{mydata.title}</h1>
          <p className="mt-3 text-gray-600 font-semibold md:w-96 text-2xl">{mydata.description}</p>
          <h1 className="text-2xl font-semibold p-3 text-gray-600">
            {' '}
            <span className="text-red-500"> ₹{mydata.price} </span>{' '}
            <span className="line-through ml-5">₹{mydata.crossprice} </span>{' '}
          </h1>
          <div></div>
          <button
            onClick={logins ? addToCart : () => navigate("/Signin")}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DisplayProduct;
