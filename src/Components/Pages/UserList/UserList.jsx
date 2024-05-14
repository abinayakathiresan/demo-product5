import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../State/Slice/userSlice";
import { useNavigate } from "react-router-dom";
import "./UserList.css";

const UserList = ()=> {
    const{users} = useSelector((state)=> state.users);
    let dispatch = useDispatch();
    let nav = useNavigate();

    function handleEdit(id)
    {
        nav("/manageUser/edit/" + id);
    }
    function handleDelete(id)
    {
        dispatch(deleteUser(id));
    }
    return(
        <div>
            <div className="user-wrapper">
                <div>Id</div>
                <div>Product Name</div>
                <div>Price</div>
                <div>Actions</div>
            </div>
            {users && users.map((item)=> {
                return(
                    <div className="user-wrapper" key = {item.id}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.age}</div>
                        <div><button onClick = {()=>{handleEdit(item.id)}}>Edit</button></div>
                        <div><button onClick = {()=>{handleDelete(item.id)}}>Delete</button></div>
                    </div>
                )
            })}
        </div>
    )
}
export default UserList;