import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState={
    isOpenCartDrawer_state:false,
    onOpenCartDrawer_state:false,
    onColseCartDrawer_state:false


}

const global = createSlice({
    name:"globalSlice",
    initialState,
    
    reducers: {
      isOpenCartDrawer_action: state => {
        state.isOpenCartDrawer_state = !state.isOpenCartDrawer_state;
      },
      onOpenCartDrawerAction: state => {
        state.isOpenCartDrawer_state = true;
      },
      onCloseCartDrawerAction: state => {
        state.isOpenCartDrawer_state = false;
      }
    }
  });
  
  export const { isOpenCartDrawer_action, onOpenCartDrawerAction, onCloseCartDrawerAction } = global.actions;
  export const selectGlobal = ( store:RootState) => store.globalSlice ;
  export const globalReducer= global.reducer;
  