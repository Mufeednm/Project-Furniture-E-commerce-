import React, { useContext } from 'react';
import UseeContext from '../Globalcontext/UseConstext';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
const Userslist = () => {
  const { user } = useContext(UseeContext);

  return (

<div>
<div className="p-1">
      <div>

      <Link to={"/AdminPage"} >
          <button          
              className="text-white bg-slate-400 hover:bg-slate-600 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"> 
              <IoMdArrowBack /> </button>
              </Link>
              </div>
      <h2 className="text-center">Items</h2>
      <div className="grid-cols-1">
        {user.map((value, index) => {
          return (
            <div key={index} className="bg-orange-300 p-5 gap-3 m-2">
              <div className="flex justify-between">
          
                <div className="flex-grow mx-4">
                  <h1 className="text-lg font-bold">NAME: {value.name}</h1>
                  <h1 className="text-gray-600"> EMAIL: {value.email}</h1>
                </div>
              
             
              </div>
            </div>
          );
        })}
     
      </div>
    </div>
</div>

    // <div className="users-list-container">
 
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Email</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {user.map((user) => (
    //         <tr key={user.id}>
    //           <td className="box">{user.name}</td>
    //           <td className="box">{user.email}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default Userslist;
