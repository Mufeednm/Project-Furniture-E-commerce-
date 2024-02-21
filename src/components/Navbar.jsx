import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RiAdminFill } from 'react-icons/ri';
import { FaUser, FaSearch } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';
import { useContext } from 'react';
import UseeContext from '../Globalcontext/UseConstext';

const Navbar = () => {
  const { logins, setLogins } = useContext(UseeContext);
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState('');

  const handleLogout = () => {
    setLogins(null);
    navigate('/');
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    navigate(`/Search/${searchData}`);
    setSearchData('');
  };

  return (
    <div className='Navbar bg-white'>
      <div className='navbar flex flex-col lg:flex-row justify-between items-center lg:items-stretch px-4 lg:px-16 py-2 lg:py-4'>
        <div className='flex items-center'>
          <Link to='/'>
            <h2 className='text-3xl lg:text-3xl'>FurniBreeze</h2>
          </Link>

          <div className='flex items-center lg:ml-32'>
            <form onSubmit={handleSearchClick} className='flex flex-wrap lg:flex-nowrap items-center'>
              <div className='relative w-full lg:w-72'>
                <input
                  type='text'
                  placeholder='Search'
                  onChange={(e) => setSearchData(e.target.value)}
                  value={searchData}
                  className='border p-2 lg:p-4 rounded-l focus:outline-none w-full'
                />
                <button
                  type='submit'
                  className='bg-blue-500 text-white p-2 lg:p-4 rounded-r absolute right-0 top-0 bottom-0'
                >
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='flex items-center gap-4 lg:ml-4'>
          <p className='text-sm lg:text-base'>{logins ? logins.name : 'not logged'}</p>

          <div>
            <button onClick={handleLogout}>
              <CiLogout />
            </button>
          </div>

          <Link to='/signup'>
            <button className='text-4xl'>
              <FaUser />
            </button>
          </Link>

          <div className='admin'>
            <button onClick={() => navigate('/AdminLogin')} className='text-4xl'>
              <RiAdminFill />
            </button>
          </div>

          <div className='cart button'>
            <button
              onClick={() => {
                logins ? navigate('/cart') : navigate('/Signin');
              }}
              className='text-4xl p-0 flex'
            >
              <span className='text-xs p-0'>{logins && logins.cart.length}</span>
              <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>

      <div className='category bg-orange-300'>
        <div className='flex justify-around p-5'>
          <Link to='/Sofas'>
            <button>Sofas</button>
          </Link>
          <Link to='/Beds'>
            <button>Beds</button>
          </Link>
          <Link to='/Table'>
            <button>Table</button>
          </Link>
          <Link to='/Chairs'>
            <button>Chairs</button>
          </Link>
          <Link to='/Wardrobes'>
            <button>Wardrobes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
