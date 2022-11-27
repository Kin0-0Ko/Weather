export type LayoutComp = {
	children?: JSX.Element | JSX.Element[];
}
export interface IWheather {
	base: string;
	clouds: {};
	cod: number;
	coord: {};
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
	wind: {};
}

export interface IGeo{
	value: string;
	label: string;
}
