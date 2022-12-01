import React, { FC, ReactElement, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchGeo} from '../store/reducesrs/ActionCreators';
import {GeoSlice} from '../store/reducesrs/GeoSlice';
import st from '../styles/Geo.module.sass'

const Geo : FC = () => {
	const [val, setVal] = useState('');
	const {error, geo, isLoading} = useAppSelector(state => state.GeoSlice)
	const dispatch = useAppDispatch();
	useEffect(() => {
		// if(val == "Almaty" || val == "Astana"){
		// 	dispatch(GeoSlice.actions.geoFetchingSuccess([{value: `43.238949 76.889709`  , label:  `Almaty`},{value: `51.169392 71.449074`  , label:  `Astana`},]))
		// }dispatch(GeoSlice.actions.geoChoose(geo))}
	
	}, [val])

	return <div className={st.container}>
	<div className={st.d1}>
	  <form>
	  <input  value={val} onChange={(e) => {setVal(e.target.value) }}/>
	  <button type='button' onClick={() => {dispatch(fetchGeo(val)); dispatch(GeoSlice.actions.geoChoose(geo))}}>Search</button>
	  </form>
	</div>
	</div>
}	

export default Geo;