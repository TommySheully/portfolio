import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { ThunkDispatch } from 'redux-thunk'
import { useDispatch } from 'react-redux'
import { appReducer } from 'common'

const rootReducer = combineReducers({
  app: appReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export const useAppDispatch: () => AppDispatch = useDispatch
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>
export type RootState = ReturnType<typeof store.getState>
