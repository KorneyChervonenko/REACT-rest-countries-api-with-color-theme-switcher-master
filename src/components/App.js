// import { useState, useEffect } from 'react';
import { useCountriesContext } from '../contexts/CountriesContext.jsx';
import Header from './Header.jsx';
import Search from './Search.jsx';
import CountriesList from './CountriesList.jsx';
import CountryDetails from './CountryDetails.jsx';
import CircularProgress from '@mui/material/CircularProgress';

import './App.scss';

export default function App() {
	const { history, isDetailsActive, isLoading } = useCountriesContext();
	return (
		<main className="App">
			<Header />
			{history.length > 0 && isDetailsActive ? (
				<CountryDetails key={history.at(-1).name} />
			) : (
				<>
					<Search />
					{isLoading && <CircularProgress style={{ color: 'yellow' }} />}
					{!isLoading && <CountriesList />}
				</>
			)}
		</main>
	);
}
