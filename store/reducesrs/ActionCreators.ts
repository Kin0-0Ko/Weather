import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IGeo, IWheather } from '../../types';
import { AppDistpatch } from '../store';
import {GeoSlice} from './GeoSlice';


export const fetchWheather = createAsyncThunk(
	'posts/fetchAll',
	async(cords: string[], thunkApi) => {
		try {
			const res = await axios.get<IWheather>(`https://api.openweathermap.org/data/2.5/weather?lat=${cords[0]}&lon=${cords[1]}&appid=afb5a84dbc5cfae2c5927433a8fbfd83&units=metric`)
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
		const res = await axios.get<IWheather>(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=afb5a84dbc5cfae2c5927433a8fbfd83`)
		let exit = {
					value:  `${res.data.coord.lat} ${res.data.coord.lon }`,
					label:   `${res.data.name}`
		}
		console.log(res);
		
		dispatch(GeoSlice.actions.geoFetchingSuccess(exit))

	} catch (error: any) {
		dispatch(GeoSlice.actions.geoFetchingError(error.message))
	}
}