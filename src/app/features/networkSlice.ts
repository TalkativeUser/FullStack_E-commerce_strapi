import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isOnline:true
}


const networkSlice=createSlice({

name:"networkSlice",
initialState,
reducers:{

    networkMode:(state , action)=>{

            state.isOnline=action.payload
    }


}



})

export default networkSlice.reducer
export const  {networkMode}=networkSlice.actions
