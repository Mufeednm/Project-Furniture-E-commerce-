import React, { useContext } from 'react';
import UseeContext from '../Globalcontext/UseConstext';


const Userslist = () => {
  const { user } = useContext(UseeContext);

  return (
    <div className="users-list-container">
 
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td className="box">{user.name}</td>
              <td className="box">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userslist;
