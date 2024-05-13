import React from "react";
import ManageProduct from "./Components/Pages/ManageProduct/ManageProduct";
import { Route, Routes } from "react-router-dom";


const RoutesConfig = ()=> {
  return(
    <div>
      <Routes>
        <Route path="/" element={<ManageProduct />}/>
        <Route path="/productList" element={<productList/>}/>
      </Routes>
    </div>
  )
}
export default RoutesConfig;