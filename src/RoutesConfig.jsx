import React from "react";
import ManageProduct from "./Components/Pages/ManageProduct/ManageProduct";
import { Route, Routes } from "react-router-dom";
import ProductList from "./Components/Pages/ProductList/ProductList";
import ManageUser from "./Components/Pages/ManageUser/ManageUser";
import UserList from "./Components/Pages/UserList/UserList";


const RoutesConfig = ()=> {
  return(
    <div>
      <Routes>
        <Route path="/" element={<ManageProduct />}/>
        <Route path="/productList" element={<ProductList/>}/>
        <Route path="/addUser" element={<ManageUser/>}/>
        <Route path="/userList" element={<UserList/>}/>
        <Route path="/manageProduct/:action/:id" element={<ManageProduct />}/>
        <Route path="/manageUser/:action/:id" element={<ManageUser />}/>
      </Routes>
    </div>
  )
}
export default RoutesConfig;