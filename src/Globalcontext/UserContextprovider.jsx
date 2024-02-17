import React, { useState } from "react";
import UseeContext from "./UseConstext";
import { DummyProducts } from "../pages/data";
const UserContextprovider = ({children})=>{
    const [user,setUser]=useState([])
    const [logins,setLogins]=useState(null)
    const [cart,setCart]=useState([])
    const [mydata,setMydata]=useState({})
    const [render,setRender]=useState(false)


    return(
        <UseeContext.Provider value={{user,setUser,logins,setLogins,cart,setCart,mydata,setMydata,render,setRender}}>
            {children}
        </UseeContext.Provider>
    )
     
}
export default UserContextprovider