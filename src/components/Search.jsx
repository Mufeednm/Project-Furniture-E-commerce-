import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseeContext from "../Globalcontext/UseConstext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Search = () => {
  const { products } = useContext(UseeContext);
  const nav = useNavigate();
  const { term } = useParams();
  const [filterdata, setfileterdata] = useState([]);

  useEffect(() => {
    const filtereddata = () => {
      const data = products.filter(
        (p) =>
          p.title.toLowerCase().includes(term.toLowerCase()) ||
          p.type.toLowerCase().includes(term.toLowerCase())
      );

      setfileterdata(data);
    };
    filtereddata();
  }, [term, setfileterdata]);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filterdata.map((val) => (
          <div key={val.id} className="bg-slate-700">
            <img
              className="w-full h-72 object-cover cursor-pointer"
              src={val.image}
              alt=""
              onClick={() => nav(`/${val.id}`)}
            />
            <div className="text-center p-3">
              <h1 className="text-white font-bold">{val.title}</h1>
              <h1 className="text-orange-300">₹{val.price}</h1>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
