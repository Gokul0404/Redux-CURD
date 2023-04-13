import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './taskslice'
export const store = configureStore({     //create store
    
    reducer: {
    tasks:tasksReducer
}

})