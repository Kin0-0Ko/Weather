import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import { wrapper } from '../store/store';
import axios from 'axios';
import Wheather from '../components/Wheather';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchWheather } from '../store/reducesrs/ActionCreators';
import { NextPage } from 'next';
import { IWheather } from '../types';

interface HomeItemProps{
	weatherOne: IWheather[];
}

export const getStaticProps = wrapper.getStaticProps(
	(store) =>
	  async ({ params }) => {
		await store.dispatch(fetchWheather({lat: 53.551086, lon: 9.993682})); 
		return {
		  props: {
			weatherOne: store.getState().WheatherSlice.weather
		  }
		};
	  }
  );


  
const Home : NextPage<HomeItemProps> = ({weatherOne}) => {
  return (
    <div className={styles.container}>
		<Wheather weather={weatherOne}/>
    </div>
  )
}


export default Home