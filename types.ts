export type LayoutComp = {
	children?: JSX.Element | JSX.Element[];
}
export interface IWheather {
	base: string;
	clouds: {};
	cod: number;
	coord: {
		lat: number,
		lon: number
	};
	dt: number;
	id: number;
	main: {
		feels_like: number,
		humidity: number,
		pressure: number,
		temp: number,
		temp_max: number,
		temp_min: number
	};
	name: string;
	sys: {};
	timezone: number;
	visability: number;
	weather: [
		{
		  id: number,
		  main: string,
		  description: string,
		  icon: string
		}
	  ];
	wind: {
		speed: number,
		deg: number,
		gust: number
	};
}

export interface IGeo{
	value: string;
	label: string;
}
