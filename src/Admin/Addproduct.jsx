import React, { useContext } from 'react'
import UseeContext from '../Globalcontext/UseConstext'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {
  const {products,setProducts} =useContext(UseeContext)
  
  const navigate = useNavigate()
  const handlesubmit = (e)=>{
    e.preventDefault();
    let newdata = new FormData(e.target);
    let title = newdata.get("title");
    let  type = newdata.get("type");
    let price = newdata.get("price");
    let image = newdata.get("image");

    let newProduct = {
      id : Math.random()*10,
      title:title,
      type :type,
      price : parseFloat(price),
      image: URL.createObjectURL(image)
    };
    setProducts ([...products,newProduct]);
    // e.target.reset();
    navigate ("/Productedit")
  }
  return (
    <div >addproduct

<form  className=' bg-orange-700'
onSubmit={(e) => handlesubmit(e)}
>
      
      <label> title :</label>
      <input
        name='title'
   
        type="text"
      />{" "}
      <br />

      <label> type:</label>
      <input
      name ='type'
    
        type="text"
      />{" "}
      <br />

      <label> price :</label>
      <input
       name = 'price'
     
        type="number"
      />
      <br />
      <label> image :</label>
      <input
       name = "image"
        placeholder
        type="file"

      />
      

      <button type="submit">add</button>
    </form>
    </div>
  )
}

export default Addproduct