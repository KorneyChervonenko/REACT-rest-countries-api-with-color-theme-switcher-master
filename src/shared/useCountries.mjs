import { useDispatch } from 'react-redux';
import { setCountries, setLoading, setReady } from '../features/Countries/countriesSlice.js';

export default function useCountries() {
	const dispatch = useDispatch();

	async function fetchCountries() {
		// const dispatch = useDispatch();
		try {
			// setIsLoading(true);
			// dispatch({ type: 'loading' });
			dispatch(setLoading());
			// const response = await fetch('data.json'); //
			// // const response = await fetch('https://restcountries.com/v2/all');
			// if (!response.ok) throw new Error('Something went wrong with fetching data');
			// const data = await response.json();

			const response = await fetch('data.json.gz');
			if (!response.ok) throw new Error('Something went wrong with fetching data');
			const ds = new DecompressionStream('gzip');
			const decompressed_stream = response.body.pipeThrough(ds);
			const data = await new Response(decompressed_stream).json();

			dispatch(setCountries(data));

			// dispatch({ type: 'set countries', payload: data });
			// console.log(regions);
			// console.log(countries);
		} catch (error) {
			console.log(error.message);
			alert(error.message);
		} finally {
			// dispatch({ type: 'ready' });
			dispatch(setReady());
		}
	}

	return { fetchCountries };
}
