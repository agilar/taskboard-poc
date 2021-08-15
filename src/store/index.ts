import { configureStore, combineReducers } from "@reduxjs/toolkit"
import areas from "./areas.reducers"


export default configureStore({
  reducer: combineReducers({
    areas
  }),
})
