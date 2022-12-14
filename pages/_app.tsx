import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { wrapper } from "../store/store";
import Layout from '../components/Layout';
import Wheather from '../components/Wheather';
import Geo from '../components/Geo';

function App({ Component, pageProps }: AppProps) {
	return <Layout>
		<Component {...pageProps} />
	</Layout>
	
   
}
export default wrapper.withRedux(App)