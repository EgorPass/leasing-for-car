import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { conditions } from "../sliceReducers/conditions"

const store = configureStore({
	reducer: { conditions } 
	
})

export default store