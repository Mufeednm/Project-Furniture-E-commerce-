import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseeContext from "../Globalcontext/UseConstext";

const Adminproductedit = () => {
    const navigate =useNavigate( )
    const {products,setProducts} =useContext(UseeContext)
  const handlesubmit = (e) => {
    e.preventDefault();
    const editproduct =products.map((e) => {
      let updatetitle = title || e.title;
      let updateprice = price || e.price;
      let updatetype = type || e.type;
      let updateimage = image || e.image;
      if (e.id == id) {
        return{
            ...products,
            id:e.id,
            title:updatetitle,
            price : updateprice,
            type : updatetype,
            image :updateimage
        }
        
        
      }else 
      return e;
    });
setProducts (editproduct)
navigate ("/Productedit")

  };
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const find =products.find((e) => e.id == id);
  console.log(find);
  return (
    <div className=" bg-red-400">
      {" "}
      Adminproductedit
      <form onSubmit={(e) => handlesubmit(e)}>
      
        <label> title :</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder={find.title}
          type="text"
        />{" "}
        <br />

        <label> type:</label>
        <input
          onChange={(e) => setType(e.target.value)}
          placeholder={find.type}
          type="text"
        />{" "}
        <br />

        <label> price :</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          placeholder={find.price}
          type="number"
        />
        <br />
        <label> image :</label>
        <input
          onChange={(e) => setImage(e.target.value)}
          placeholder
          type="text"
        />
        <img src={find.image} alt="" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default Adminproductedit;
