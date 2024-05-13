import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ManageProduct = ()=> {
  const[name, setName] = useState("");
  const[price, setPrice] = useState("");
  let dispatch = useDispatch();
  let nav = useNavigate();

  let productObj;
  
  function handleSubmit()
  {
    let id = Math.random(9,999);
    productObj = {id, name, price};
    dispatch(addProduct((productObj));
    nav("./productList");
  }
  
  return(
    <div>
      <div>Product Name:</div><div><input type = "text" name ="name" onChange = {(e)=>{setName(e.target.value)}}/></div>
      <div>Product Price:</div><div><input type = "number" name ="price" onChange = {(e)=>{setPrice(e.target.value)}}/></div>
      <div><button onClick = {handleSubmit}>Submit</button></div>
    </div>
      
  )
}
export default ManageProduct;
