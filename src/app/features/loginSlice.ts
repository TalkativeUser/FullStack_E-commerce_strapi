import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../Api/axios.config'
import { loginInterface } from '../../interfaces'

// 1. Define the async thunk for user login
export const userLogin = createAsyncThunk('login/userLogin', async (_, thunkApi) => {
  const { rejectWithValue } = thunkApi

  try {
    const { data } = await axiosInstance.get('/api/auth/local')
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

// 2. Define the initial state interface
interface InitialState {
  pending: boolean
  error: any|null
  data: null | loginInterface
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
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.pending = false
        state.error = action.payload 
      })
  },
})

// Export the reducer from the slice
export const loginReducer=  loginSlice.reducer
