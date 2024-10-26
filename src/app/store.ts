import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './features/loginSlice'
import { cartReducer } from './features/cartSlice'
import { globalReducer } from './features/globalSlice'

// ...

export const store = configureStore({
  reducer: {
    loginSlice:loginReducer,
    cartSlice:cartReducer,
    globalSlice:globalReducer

  
  },
})


export const cartSelector =(store:RootState )=> store.cartSlice.cartProducts


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch;  الخطوه دى ممكن اشغلها ولو شغلتها يبقا هستخدم ال  useAppDispatch  مكان ال  use
//  useDispatch  بشكل مباشر فى المشروع كله وممكن استخدم ال  useDispatch  معاها عادى مش فارقه 
