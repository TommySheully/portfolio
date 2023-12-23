import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import emailjs from '@emailjs/browser'

export type StatusType = 'idle' | 'failed' | 'error' | 'success' | null

export type MessageType = {
  name: string | null
  email: string | null
  message: string | null
}

type InitialStateType = {
  status: StatusType
  isOpen: boolean
  valueData: MessageType
}

const initialState: InitialStateType = {
  status: 'idle',
  isOpen: false,
  valueData: { name: null, email: null, message: null }
}

export const sendMessageTC = createAsyncThunk('app/getMeAuth', async (messageData: MessageType, { dispatch }) => {
  const { message, email, name } = messageData

  try {
    emailjs.send('service_4fabnja', 'template_arhr7fd', { name, email, message }, 'sZ7UGW_JqA9SCT0q4')
    dispatch(setAppStatusAC('success'))
    dispatch(setIsOpenAC(true))
  } catch (e) {
    dispatch(setAppStatusAC('failed'))
    dispatch(setIsOpenAC(true))
  } finally {
  }
})

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppStatusAC(state, action: PayloadAction<StatusType>) {
      state.status = action.payload
    },
    setIsOpenAC(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
    },
    setErrorMessageAC(state, action: PayloadAction<MessageType>) {
      state.valueData.name = action.payload.name
      state.valueData.message = action.payload.message
      state.valueData.email = action.payload.email
    }
  }
})

export const { setAppStatusAC, setErrorMessageAC, setIsOpenAC } = appSlice.actions
export const appReducer = appSlice.reducer
