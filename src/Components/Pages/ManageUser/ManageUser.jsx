import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addUser, editUser } from "../../../State/Slice/userSlice";

const ManageUser = ()=> {
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    let dispatch = useDispatch();
    let {action, id} = useParams();
    let nav = useNavigate();
    const {users} = useSelector((state)=> state.users);
    
    let userObj = users && users.find((item)=> {
        return item.id == id;
    })

    useEffect(()=> {
        if(action == "edit"){
        setName(userObj?.name),
        setAge(userObj?.age)
    }
    },[userObj,action])

    function handleSubmit()
    {
        if(action == "edit")
        {
            let newUser = {...userObj, name, age};
            dispatch(editUser(newUser));
        }
        else{
            const id = Math.random(9,333);
            let userObj = {id:id, name:name, age:age};
            dispatch(addUser(userObj));
        }
        
        nav("/userList");
    }
    return(
        <div>
            <div>Name:</div>
            <div><input type = "text" name = "name" onChange = {(e)=>{setName(e.target.value)}} value = {name}/></div>
            <div>Age:</div>
            <div><input type = "text" name = "age" onChange = {(e)=>{setAge(e.target.value)}} value = {age}/></div>
            <div><button onClick = {handleSubmit}>Add User</button></div>
        </div>
    )
}
export default ManageUser;
