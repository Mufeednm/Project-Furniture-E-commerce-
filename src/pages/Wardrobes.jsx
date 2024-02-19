import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UseeContext from '../Globalcontext/UseConstext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Wardrobes = () => {
  const { products } = useContext(UseeContext);
  const nav = useNavigate();

  return (
    <div>
      <Navbar />
      <figure className="relative max-w-screen-2xl transition-all duration-500">
        <a href="#">
          <img
            className="w-full"
            src="https://highdecora.co.uk/wp-content/uploads/2022/08/Fitted-Wardrobe_Banner-2.jpg"
            alt="Wardrobes Banner"
          />
        </a>
        <figcaption className="absolute px-7 text-lg text-black bottom-6 w-full text-justify">
          <p>Beds of Dream </p>
        </figcaption>
      </figure>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-10 mt-10">
        {products
          .filter((value) => value.type === "Wardrobe")
          .map((e, index) => (
            <div key={index} className="bg-slate-200">
              <img
                className="w-full h-80 object-cover cursor-pointer"
                src={e.image}
                alt=""
                onClick={() => nav(`/${e.id}`)}
              />

              <div className="text-center p-3">
                <h1 className="">{e.title}</h1>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Wardrobes;
