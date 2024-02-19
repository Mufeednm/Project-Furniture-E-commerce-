import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import UseeContext from "../Globalcontext/UseConstext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Chairs = () => {
  const {products} =useContext(UseeContext)
  const nav = useNavigate();
  return (
    <div>
      <Navbar/>
    <div>
    <figure className="relative max-w-5xl transition-all duration-500">
        <a href="#">
          <img
            className="max-w-screen-2xl"
            src="https://cdnb.artstation.com/p/assets/images/images/017/384/833/large/ali-nouman-1.jpg?1555756245"
            alt="image description"
            />
        </a>
        <figcaption className="absolute px-7 text-lg text-black bottom-6 w-full text-justify">

        </figcaption>
      </figure>
      <img src="" alt="" />
      <div className="grid grid-cols-3 gap-4">
        {products.filter((value) => value.type === "chair").map((e ,index) => (
          <div key={index} className="bg-slate-200">
            <img
              style={{ height: 500, padding: 10 }}
              src={e.image}
              onClick={() => nav(`/${e.id}`)}
              alt=""
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
  );
};

export default Chairs;
