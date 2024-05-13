import React from "react";
import {Link } from "react-router-dom";
const Header = ()=> {
  return(
    <div>
       <ul>
            <li>
              <Link to="/" >
                Manage Product
              </Link>
            </li>
            <li>
              <Link to="/productList" >
                Product List
              </Link>
            </li>
          </ul> 
    </div>
  )
          

}
export default Header;