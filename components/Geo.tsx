import React, { FC, ReactElement, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchGeo } from '../store/reducesrs/ActionCreators';
import {GeoSlice} from '../store/reducesrs/GeoSlice';
import st from '../styles/Geo.module.sass'

const Geo : FC = () => {
	const [val, setVal] = useState('');
	const {error, geo, isLoading} = useAppSelector(state => state.GeoSlice)
	const dispatch = useAppDispatch();
	useEffect(() => {
		if(val == "Almaty" || val == "Astana"){
			dispatch(GeoSlice.actions.geoFetchingSuccess([{value: `===`  , label:  `Almaty`},{value: `===`  , label:  `Astana`},]))
		}
	
	}, [val])
	

  return <div className={st.GeoContainer}>
	<input  value={val} onChange={(e) => {setVal(e.target.value); dispatch(fetchGeo(val))}}/>
	<div>
		<ul>
		{geo.map((city) => 
				<li key={city.value}>{city.label}</li>)
		}
		</ul>
	</div>
  </div>
}	

export default Geo;