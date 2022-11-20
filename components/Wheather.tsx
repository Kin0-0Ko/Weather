import axios from 'axios';
import { NextPage } from 'next';
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchWheather } from '../store/reducesrs/ActionCreators';
import { IWheather } from '../types';

interface WeatherItemProps{
	weather: IWheather[];
}

const Wheather: FC<WeatherItemProps> = ({weather}) => {
  return <>
		<ul>
		{weather.map((el) => 
				<li key={el.id}>{JSON.stringify(el)}</li>)
		}
		</ul>
  </>
}

export default Wheather