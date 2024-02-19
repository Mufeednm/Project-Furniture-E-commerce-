import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UseeContext from "../Globalcontext/UseConstext";
import Footer from "./Footer";

const Homepage = () => {
  const { products } = useContext(UseeContext);
  const nav = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="homepage bg-white">
        <Link to={"/Sofas"}>
          <img
            className="p-2 w-full"
            src="https://hometown.gumlet.io/media/cms/icons/new-arrival2.jpg?w=1536&dpr=1.3"
            alt=""
          />
        </Link>

        <div className="text-center">
          <h1 className="text-3xl text-orange-900"> New arrivals </h1>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {/* type 1 */}
            <Link to={"/Beds"} className="w-full md:w-1/3 lg:w-1/4">
              <div className="bg-slate-200">
                <img
                  className="w-full"
                  src="https://homesofrajasthan.com/wp-content/uploads/2023/05/bd19p-860x860.jpeg"
                  alt=""
                />
                <div className="text-center p-3">
                  <h1 className="">BEDS</h1>
                </div>
              </div>
            </Link>

            {/* type 2 */}
            <Link to={"Sofas"} className="w-full md:w-1/3 lg:w-1/4">
              <div className="bg-slate-200">
                <img
                  className="w-full"
                  src="https://homesofrajasthan.com/wp-content/uploads/2022/11/sauvage-chesterfield-leather-sofa-3-910x1155-1.jpg"
                  alt=""
                />
                <div className="text-center p-3">
                  <h1 className="">Premium Leather Sofa</h1>
                </div>
              </div>
            </Link>

            {/* type 3 */}
            <Link to={"/Table"} className="w-full md:w-1/3 lg:w-1/4">
              <div className="bg-slate-200">
                <img
                  className="w-full"
                  src="https://homesofrajasthan.com/wp-content/uploads/2023/04/1-17.jpg"
                  alt=""
                />
                <div className="text-center p-3">
                  <h1 className="">First Class Dining Table</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="p-1">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl">Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((value, index) => (
              <div key={index} className="w-full">
                <img
                  className="w-full"
                  src={value.image}
                  alt=""
                  onClick={() => nav(`/${value.id}`)}
                />
                <div className="text-center p-3">
                  <h1 className="">{value.title}</h1>
                  <h1> ₹{value.price}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
