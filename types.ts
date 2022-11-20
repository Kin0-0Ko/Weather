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
	main: {};
	name: string;
	sys: {};
	timezone: number;
	visability: number;
	wheather: [{}];
	wind: {};
}

export interface IGeo{
	value: string;
	label: string;
}

export interface ICords{
	lat: number,
	lon: number
}