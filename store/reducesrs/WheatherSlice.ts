import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { IWheather } from '../../types';
import { fetchWheather } from './ActionCreators';

interface WeatherState {
	weather: IWheather[];
	isLoading: boolean;
	error: string;
}

const initialState: WeatherState = { 
	weather: [],
	isLoading: false,
	error: '',
}

export const WheatherSlice = createSlice({
	name: "Wheather",
	initialState,
	reducers: {
		weatherAdd(state, action: PayloadAction<IWheather>){
			state.isLoading = false
			state.weather = [action.payload,...state.weather]
			state.error = ''


		},
	},
	extraReducers: {
		[fetchWheather.fulfilled.type]:(state, action: PayloadAction<IWheather>) => {
			state.isLoading = false
			state.weather = state.weather.filter(el => el.id != action.payload.id)
			state.weather.push(action.payload)
			state.error = ''


		},
		[fetchWheather.pending.type]:(state, action: PayloadAction<IWheather[]>) => {
			state.isLoading = true



		},
		[fetchWheather.rejected.type]:(state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload

		},
		[HYDRATE]: (state, action) => {
			return {
			  ...state,
			  ...action.payload.Wheather
			};
		  },


	}
})


export default WheatherSlice.reducer;