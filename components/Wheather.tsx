import axios from 'axios';
import { NextPage } from 'next';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchWheather } from '../store/reducesrs/ActionCreators';
import {WheatherSlice} from '../store/reducesrs/WheatherSlice';
import { IWheather } from '../types';
import st from '../styles/Weather.module.sass'

interface WeatherItemProps{
	weatherO: IWheather[];
}

const Wheather: FC<WeatherItemProps> = ({weatherO}) => {
	const {isLoading, weather} = useAppSelector(state => state.WheatherSlice)
	const {chosen} = useAppSelector(state => state.GeoSlice)
	const dispatch = useAppDispatch()
	const Handler =  () => {

	}	

	useEffect(() => {
		dispatch(fetchWheather(chosen.value.split(' ')))
		console.log(weather);
		
	}, [chosen])
	

  return <>
		<div>
		{weather.map(el => 
			<div className={st.weatherContainer} key={el.id}>
				<span>
					Place: {el.name}
				</span>
				<span>
					Temp: {el.main.temp}
				</span>
				<Image
					  src={`/icons/${el.weather[0].icon}.png`}
					  alt="Picture of the author"
					  width={50}
					  height={50}
				/>

			</div>
			)}
		</div>
  </>
}

export default Wheather