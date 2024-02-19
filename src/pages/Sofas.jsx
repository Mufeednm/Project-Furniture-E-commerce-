import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UseeContext from '../Globalcontext/UseConstext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Sofas = () => {
  const { products } = useContext(UseeContext);
  const nav = useNavigate();

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <img
            className="w-full"
            src="https://mysleepyhead.com/media/wysiwyg/uploads/HomePage/Sept30DesktopbannerSofa.jpg"
            alt="Sofas Banner"
          />
        </div>

        <h2>hellooo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {products
            .filter((value) => value.type === "sofa")
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
      </div>
      <Footer />
    </div>
  );
};

export default Sofas;
