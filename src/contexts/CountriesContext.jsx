import { createContext, useContext, useReducer, useEffect } from 'react';
const CountriesContext = createContext();

const initialState = {
	countries: [],
	region: 'All',
	searchQuery: '',
	isLoading: false,
};

function getInitialState() {
	return initialState;
}

function reducer(state, action) {
	// console.log(action.type, action.payload.name);
	switch (action.type) {
		case 'loading':
			return { ...state, isLoading: true };

		case 'ready':
			return { ...state, isLoading: false };

		case 'set countries':
			return { ...state, countries: action.payload, isLoading: false };

		case 'set region':
			return { ...state, region: action.payload };

		case 'set search query':
			return { ...state, searchQuery: action.payload };

		case 'reset':
			return { ...initialState, countries: state.countries };

		default:
			throw new Error('Unknown action type');
	}
}

function CountriesContextProvider({ children }) {
	const [{ countries, region, searchQuery, isLoading }, dispatch] = useReducer(
		reducer,
		undefined,
		getInitialState
	);

	useEffect(function () {
		// console.clear();
		async function fetchCountries() {
			try {
				// setIsLoading(true);
				dispatch({ type: 'loading' });

				// const response = await fetch('data.json'); //
				// // const response = await fetch('https://restcountries.com/v2/all');
				// if (!response.ok) throw new Error('Something went wrong with fetching data');
				// const data = await response.json();

				const response = await fetch('data.json.gz');
				if (!response.ok) throw new Error('Something went wrong with fetching data');
				const ds = new DecompressionStream('gzip');
				const decompressed_stream = response.body.pipeThrough(ds);
				const data = await new Response(decompressed_stream).json();

				dispatch({ type: 'set countries', payload: data });

				// console.log(regions);

				// console.log(countries);
			} catch (error) {
				console.log(error.message);
				alert(error.message);
			} finally {
				dispatch({ type: 'ready' });
			}
		}
		fetchCountries();
	}, []);

	return (
		<CountriesContext.Provider value={{ countries, region, searchQuery, isLoading, dispatch }}>
			{children}
		</CountriesContext.Provider>
	);
}

function useCountriesContext() {
	const context = useContext(CountriesContext);
	if (context === undefined)
		throw new Error('CountriesContext was used outside the CountriesContextProvider');
	return context;
}

export { CountriesContextProvider, useCountriesContext };
