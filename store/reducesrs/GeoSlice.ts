import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGeo } from '../../types';
// import { fetchPosts } from './AcrionCreators';

interface GeoState {
	geo: IGeo[];
	isLoading: boolean;
	error: string;
	chosen: IGeo	
}

const initialState: GeoState = { 
	geo: [{value: `43.238949 76.889709`  , label:  `Almaty`},{value: `51.169392 71.449074`  , label:  `Astana`}],
	isLoading: false,
	error: '',
	chosen: {value: `43.238949 76.889709`  , label:  `Almaty`}		
}

export const GeoSlice = createSlice({
	name: "Geo",
	initialState,
	reducers: {
		geoFetcching(state){
			state.isLoading = true
		},
		geoFetchingSuccess(state, action: PayloadAction<IGeo[]>){
			state.isLoading = false
			state.geo = action.payload
			state.error = ''


		},
		geoFetchingError(state, action: PayloadAction<string>){
			state.isLoading = false
			state.error = action.payload

		},
		geoChoose(state, action: PayloadAction<IGeo>){
			state.chosen = action.payload
		},
	}
})


export default GeoSlice.reducer;