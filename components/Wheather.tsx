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
		
	}, [chosen])


  return <>
		<div className='container'>
		{weather.map(el => 
					<div key={el.id} id="card" className="weather">
					<div className="details">
					  <div className="temp">
						{Math.round(el.main.temp)}
						<span>&deg;</span>
					  </div>
					  <div className="right">
						<div id="summary">{el.weather[0].description}</div>
						<div style={{ fontWeight: "bold", marginTop: "4px" }}>{el.name}</div>
					  </div>
					</div>
					<Image
					  src={`/icons/${el.weather[0].icon}.svg`}
					  alt="Picture of the author"
					  className='weatherimg'
					  width={200}
					  height={200}
						/>
					<div className="infos">
					
					  <div className="witem">
						<Image
					  src={`/icons/humidity.svg`}
					  alt="Picture of the author"
					  className='iconimg'
					  width={20}
					  height={20}
						/>
						Humidity {el.main.humidity}%</div>
					  
					  <div className="witem">
						<Image
					  src={`/icons/visibility.svg`}
					  alt="Picture of the author"
					  className='iconimg'
					  width={20}
					  height={20}
						/>
						Visibility {el.visability} km</div>
					  
					  <div className="witem">
						 <Image
					  src={`/icons/wind.svg`}
					  alt="Picture of the author"
					  className='iconimg'
					  width={20}
					  height={20}
						/>
						Wind Speed {el.wind.speed} km</div>
					 
					</div>
				  </div>
					)}
		{/* {weather.map(el => 
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
			)} */}
		</div>
  </>
}

export default Wheather