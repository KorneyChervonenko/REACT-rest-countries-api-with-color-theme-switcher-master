// import { useState, useEffect } from 'react';
import { useCountriesContext } from '../contexts/CountriesContext.jsx';
import Header from './Header.jsx';
import Search from './Search.jsx';
import CountriesList from './CountriesList.jsx';
import CountryDetails from './CountryDetails.jsx';
import LoadingIndicator from './LoadingIndicator.jsx';

import './App.scss';

export default function App() {
	const { history, isLoading } = useCountriesContext();
	return (
		<main className="App">
			<Header />
			{history.length > 0 ? (
				<CountryDetails key={history.at(-1).name} />
			) : (
				<>
					<Search />
					{isLoading ? <LoadingIndicator /> : <CountriesList />}
				</>
			)}
		</main>
	);
}
