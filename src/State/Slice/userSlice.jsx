import { createSlice } from "@reduxjs/toolkit";
import { store } from "../store";

const initialState = {
    users : [{id:1, name:"abinaya", age:20}, {id:2, name:"aahana", age:8}]
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action)=> {
            let newUser =  action.payload;
            state.users.push(newUser);
        },
        deleteUser: (state, action)=> {
            state.users = state.users.filter((item)=> {
                return item.id != action.payload;
            })
        },
        editUser: (state, action)=> {
            state.users = state.users.map((item)=> {
                return item.id == action.payload.id ? action.payload : item;
            })
        }
    }
})

export const {addUser,deleteUser,editUser} = userSlice.actions;
let usersReducer = userSlice.reducer;
export default usersReducer;