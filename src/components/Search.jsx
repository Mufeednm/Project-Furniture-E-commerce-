import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { DummyProducts } from "../pages/data";
import { useEffect } from "react";
import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const nav = useNavigate();
  const { term } = useParams();
  const [filterdata, setfileterdata] = useState([]);

  useEffect(() => {
    const filtereddata = () => {
      const data = DummyProducts.filter((p) =>
        p.title
          .toLowerCase()
          .includes(
            term.toLowerCase() ||
              p.typetoLowerCase().includes(term.toLowerCase())
          )
      );

      setfileterdata(data);
      
    };
    filtereddata();
  }, [term, setfileterdata]);

  return (
      <div className="    grid grid-cols-3   gap-6">
        {filterdata.map((val) => {
          return (
            <div className="bg-slate-700 ">
              <img
                style={{ height: 500, padding: 10 }}
                src={val.image}
                alt=""
                onClick={() => nav(`/${val.id}`)}
              />

              <div className="text-center p-3 ">
                <h1 className="">{val.title}</h1>

                <h1> ₹{val.price}</h1>
              </div>
            </div>
          );
        })}
      </div>
  );
};

export default Search;
