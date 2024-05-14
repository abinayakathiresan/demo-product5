import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct, editProduct} from "../../../State/Slice/productSlice";

const ManageProduct = ()=> {
  const[name, setName] = useState("");
  const[price, setPrice] = useState("");
  let dispatch = useDispatch();
  let nav = useNavigate();
  let {action,id} = useParams();
  const {products} = useSelector((state)=>state.products);

  
  let productObj = products.find((item)=> {
    return item.id == id;
  })

  useEffect(()=>{setName(productObj?.name),
  setPrice(productObj?.price)},[productObj]);

  function handleSubmit()
  {
    if(action == "edit")
    {
     let newProduct = {...productObj, name,price};
     dispatch(editProduct(newProduct));
    }
    else{
      let id = Math.random(9,999);
      productObj = {id, name, price};
      dispatch(addProduct(productObj));
    }
    
    nav("/productList");
  }
  
  return(
    <div>
      <div>Product Name:</div><div><input type = "text" name ="name" onChange = {(e)=>{setName(e.target.value)}} value = {name}/></div>
      <div>Product Price:</div><div><input type = "number" name ="price" onChange = {(e)=>{setPrice(e.target.value)}} value = {price}/></div>
      <div><button onClick = {handleSubmit}>Submit</button></div>
    </div>
      
  )
}
export default ManageProduct;
