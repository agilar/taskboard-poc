import { configureStore, combineReducers } from "@reduxjs/toolkit"
import areas from "./areas.reducers"


export const store = configureStore({
  reducer: combineReducers({
    areas
  }),
})

export type State = ReturnType<typeof store.getState>
