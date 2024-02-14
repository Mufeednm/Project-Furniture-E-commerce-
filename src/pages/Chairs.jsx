import React from "react";
import { Link } from "react-router-dom";
import { DummyProducts } from "./data";
import { useNavigate } from "react-router-dom";
const Chairs = () => {
  const nav = useNavigate();
  return (
    <div>
      Chairs
      <img src="" alt="" />
      <div className="grid grid-cols-3 gap-4">
        {DummyProducts.filter((value) => value.type === "chair").map((e) => (
          <div className="bg-slate-200">
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
