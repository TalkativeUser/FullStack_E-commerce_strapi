import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './features/loginSlice'
import { cartReducer } from './features/cartSlice'
import { globalReducer } from './features/globalSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { apiSlice } from './services/productsApis'


const rootReducer = combineReducers({
  loginSlice: loginReducer,
  cartSlice: cartReducer,
  globalSlice: globalReducer,
  [apiSlice.reducerPath]:apiSlice.reducer
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
   middleware: getDefaultMiddleware => getDefaultMiddleware( {serializableCheck:false} ).concat(apiSlice.middleware),

})

export const persistor = persistStore(store)


// export const cartSelector =(store:RootState )=> store.cartSlice.cartProducts
export const cartSelector = (store: RootState) => store.cartSlice


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch;  الخطوه دى ممكن اشغلها ولو شغلتها يبقا هستخدم ال  useAppDispatch  مكان ال  use
//  useDispatch  بشكل مباشر فى المشروع كله وممكن استخدم ال  useDispatch  معاها عادى مش فارقه 
