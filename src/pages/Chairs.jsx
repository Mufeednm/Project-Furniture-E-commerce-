import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import UseeContext from "../Globalcontext/UseConstext";
const Chairs = () => {
  const {products} =useContext(UseeContext)
  const nav = useNavigate();
  return (
    <div>
      Chairs
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
  );
};

export default Chairs;
