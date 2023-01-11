import { configureStore } from '@reduxjs/toolkit'

import ListReducer from "./Reducer/ListReducer";

const store = configureStore({
    reducer: ListReducer
})

export default store