import axios from 'axios';
import { NextPage } from 'next';
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchWheather } from '../store/reducesrs/ActionCreators';
import {WheatherSlice} from '../store/reducesrs/WheatherSlice';
import { IWheather } from '../types';

interface WeatherItemProps{
	weatherO: IWheather[];
}

const Wheather: FC<WeatherItemProps> = ({weatherO}) => {
	const [weatherS, setWheather] = useState(weatherO)
	const {isLoading, weather} = useAppSelector(state => state.WheatherSlice)
	const {chosen} = useAppSelector(state => state.GeoSlice)
	const dispatch = useAppDispatch()
	const Handler =  () => {
		dispatch(fetchWheather(chosen.value.split(' ')))
	}	

	useEffect(() => {
	  Handler()
	  console.log(weather);
	  
	}, [chosen])
	

  return <>
		<ul>
		{weatherS.map((el) => 
				<li key={el.id}>{JSON.stringify(el)}</li>)
		}
		</ul>
  </>
}

export default Wheather