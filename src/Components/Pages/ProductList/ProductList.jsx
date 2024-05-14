import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../../State/Slice/productSlice";
const ProductList = ()=> {
  const {products} = useSelector((state)=>state.products);
  let nav = useNavigate();
  let dispatch = useDispatch();

  function handleEdit(id)
  {
    nav("/manageProduct/edit/"+ id);
  }
  function handleDelete(id)
  {
    dispatch(deleteProduct(id));
  }
  return(
    <div>
      <div className="product-wrapper">
        <div>Id</div>
        <div>Product Name</div>
        <div>Price</div>
        <div>Actions</div>
        
      </div>
      {products && products.map((item)=> {
        return(
          <div className="product-wrapper">
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div><button onClick = {()=>{handleEdit(item.id)}}>Edit</button></div>
            <div><button onClick = {()=>{handleDelete(item.id)}}>Delete</button></div>
          </div>
        )
      })}
    </div>
  )
}
export default ProductList;