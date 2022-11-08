import React, { FC, ReactElement, useEffect, useState } from 'react'
import { LayoutComp } from '../types'


const Layout : FC = ({children} : LayoutComp) => {
	const [data, setData] = useState();
	const getData = async () => {
		await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.238949&lon=76.889709&appid=afb5a84dbc5cfae2c5927433a8fbfd83`)
		.then(res => res.json())
		.then(setData)
	}

	useEffect(()  =>  {
		getData();
		
	}, [setData])
	

  return <>
	{JSON.stringify(data)}
	{children}
  </>
}

export default Layout