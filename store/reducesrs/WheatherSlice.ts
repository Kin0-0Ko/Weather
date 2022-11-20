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
	},
	extraReducers: {
		[fetchWheather.fulfilled.type]:(state, action: PayloadAction<IWheather>) => {
			state.isLoading = false
			if(JSON.stringify(state.weather) != '[]'){
				state.weather.forEach(el => {
					JSON.stringify(el) != JSON.stringify(action.payload) ? state.weather.push(action.payload)
					 : state.weather = state.weather;
				})
			}else{
				state.weather.push(action.payload)
			}
			
			
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