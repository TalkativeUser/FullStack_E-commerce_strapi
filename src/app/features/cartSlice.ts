import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../../interfaces";
import { isAddToCart_or_increesQuantity } from "../../utils";
// import { ProductAttributes_initialState } from "../../InitialStates";

interface initialFace{

    cartProducts:ProductData[]
}

const initialState:initialFace={

    cartProducts:[]
}


const cartSlice=createSlice({
    
    name:"cart",
    initialState,
    reducers:{
        
        addToCart:(state,action:PayloadAction<ProductData>)=>{

            state.cartProducts= isAddToCart_or_increesQuantity(state.cartProducts, action.payload )
        }


    }
})


export const cartReducer=cartSlice.reducer;
export const cartActions=cartSlice.actions ;
