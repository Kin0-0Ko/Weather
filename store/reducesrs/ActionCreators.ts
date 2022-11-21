import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IGeo, IWheather } from '../../types';
import { AppDistpatch } from '../store';
import {GeoSlice} from './GeoSlice';


// export const fetchWheather = (lat: number, lon: number) => async (dispatch: AppDistpatch) => {
// 	try {
// 		dispatch(WheatherSlice.actions.wheatherFetcching())
// 		const res = await axios.get<IWheather>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=afb5a84dbc5cfae2c5927433a8fbfd83`)
// 		dispatch(WheatherSlice.actions.wheatherFetchingSuccess(res.data))

// 	} catch (error: any) {
// 		dispatch(WheatherSlice.actions.wheatherFetchingError(error.message))
		
// 	}
// }

export const fetchWheather = createAsyncThunk(
	'posts/fetchAll',
	async(cords: string[], thunkApi) => {
		try {
			const res = await axios.get<IWheather>(`https://api.openweathermap.org/data/2.5/weather?lat=${cords[0]}&lon=${cords[1]}&appid=afb5a84dbc5cfae2c5927433a8fbfd83`)
			return res.data
		} catch (er: any) {
			return thunkApi.rejectWithValue(er.message)
		}
	}
)




// --------------------------------------

export const fetchGeo = (name: string) => async (dispatch: AppDistpatch) => {
	try {
		dispatch(GeoSlice.actions.geoFetcching())
		const options = {
			method: 'GET',
			url: `https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions`,
			params: {namePrefix: name},
			headers: {
			  'X-RapidAPI-Key': '3cf95d5544msh96355c9fde6ccb1p1d1701jsna9da6432bef2',
			  'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
			}
		  };
		const res = await axios.request(options).then((res) => res.data.data.map((city: any) => {
					return{
							value:  `${city.latitude} ${city.longitude }`,
							label:   `${city.name} ${city.countryCode  }`
						
					}}))
		dispatch(GeoSlice.actions.geoFetchingSuccess(res))

	} catch (error: any) {
		dispatch(GeoSlice.actions.geoFetchingError(error.message))
	}
}