import React, { useState } from "react";
import UseeContext from "./UseConstext";
const UserContextprovider = ({children})=>{
    const [user,setUser]=useState([])
    return(
        <UseeContext.Provider value={{user,setUser}}>
            {children}
        </UseeContext.Provider>
    )
     
}
export default UserContextprovider