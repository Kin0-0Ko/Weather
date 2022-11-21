import styles from '../styles/Home.module.sass'
import { wrapper } from '../store/store';
import Wheather from '../components/Wheather';
import { fetchWheather } from '../store/reducesrs/ActionCreators';
import { NextPage } from 'next';
import { IWheather } from '../types';
import Geo from '../components/Geo';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

interface HomeItemProps{
	weather: IWheather[];
}

export const getStaticProps = wrapper.getStaticProps(
	(store) =>
	  async ({ params }) => {
		await store.dispatch(fetchWheather(store.getState().GeoSlice.chosen.value.split(' '))); 
		return {
		  props: {
			weather: store.getState().WheatherSlice.weather
		  }
		};
	  }
  );


  
const Home : NextPage<HomeItemProps> = ({weather}) => {
	const {chosen} = useAppSelector(state => state.GeoSlice)
	const dispatch = useAppDispatch()
	useEffect(()=>{
		dispatch(fetchWheather(chosen.value.split(' ')))
	},[])

  return (
    <div className={styles.container}>
		<Geo/>
		<Wheather weatherO={weather}/>
    </div>
  )
}


export default Home