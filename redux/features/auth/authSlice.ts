import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:"",
  user:""
}
export const authSlice=createSlice({
  name: "auth",
  initialState:initialState,
  reducers:{
    userRegistration(state,action){
      state.token = action.payload.token

    },
    userLoggedIn(state,action){
      state.token = action.payload.accessToken,
      state.user = action.payload.user
    },
    userLoggedOut(state){
      state.token ="",
      state.user =""

    }
  }
});

export const {userRegistration,userLoggedIn,userLoggedOut}=authSlice.actions;
export default  authSlice.reducer;