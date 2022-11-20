import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { createWrapper } from "next-redux-wrapper";
import WheatherSlice from './reducesrs/WheatherSlice';
import GeoSlice from './reducesrs/GeoSlice';


const rootReduser = combineReducers({
	WheatherSlice,
	GeoSlice,
})

export const setupSore = () => {
	return configureStore({
		reducer: rootReduser
		
	})
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupSore>
export type AppDistpatch = AppStore['dispatch']
export const wrapper = createWrapper<AppStore>(setupSore);
