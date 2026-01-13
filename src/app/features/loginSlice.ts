import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance, isIAxiosErrorMsg } from '../../Api/axios.config'
import { IAxiosErrorMsg, loginResponse } from '../../interfaces'
import {createStandaloneToast } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import cookieService from '../../services/cookieService'

const {toast}=createStandaloneToast()
interface UserLoginInterFace {
  identifier: string;
  password: string;
}


// 1. Define the async thunk for user login
export const userLogin = createAsyncThunk('login/userLogin', async (user:UserLoginInterFace, thunkApi) => {
  const { rejectWithValue} = thunkApi

  try {
    const { data } = await axiosInstance.post('/api/auth/local',user )
    return data
  } catch (error) {

    // console.log("%cErrorLogin", "color: red; padding: 5px; font-size: 20px;", "=>", error);
    const axiosErrorObject=error as AxiosError <IAxiosErrorMsg> 
     

    //  احنا احتمال ما نحتاجش الشرط ده لانه بيمسك الايرور اللى بيكون راجع بسبب مشكله فى حقول الادخال وطبعا لو فى مشكله فى حقول الادخال اكيد 
    //  ال  yup validation  مش هتسيبنى اعمل  submit  اصلا  بس نسيبها من باب الاحتياط 
      if (axiosErrorObject.response && isIAxiosErrorMsg(axiosErrorObject.response.data)) {
        return  rejectWithValue(axiosErrorObject.response.data.error.message)
      
      } 

      // احنا فى الحاله دى بنتأكد ان الايرور مثلا من الريكويست نفسه يعنى مثلا ال  method  غلط او فى مشكله فى السيرفر او الشبكه 
      if(axiosErrorObject.message) {

        return rejectWithValue(axiosErrorObject.message )        
       }
      
      else {

  return rejectWithValue('defferent error')        
      }

  }
})


// 2. Define the initial state interface
interface InitialState {
  pending: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any|null
  data: null|loginResponse
}

const initialState: InitialState = {
  pending: false,
  error: null,
  data: null
}

// 3. Create the slice using builder.addCase in extraReducers
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.pending  = true
        state.error = null
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.pending = false
        state.data = action.payload
      const date=new Date();
      const IN_DAYS=3;
      const EXPIRES_IN_DAYS=1000*60*60*24*IN_DAYS;
      date.setTime(date.getTime()+EXPIRES_IN_DAYS )
      const options = {path:"/",expires:date }

        cookieService.set('jwt',action.payload.jwt,options)

        toast({
          title:"Success loged in ",
          status:"success",
          duration:2000
        })
      })
      .addCase(userLogin.rejected, (state,action) => {
        console.log('action-------> ', action.payload);
        
        state.pending = false
        toast({
          title: action.payload as string , 
          status:"error",
          duration:2000
        })
      })
  },
})

// Export the reducer from the slice
export const loginReducer=  loginSlice.reducer
