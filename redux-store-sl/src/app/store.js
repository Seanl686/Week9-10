import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice.jsx/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})