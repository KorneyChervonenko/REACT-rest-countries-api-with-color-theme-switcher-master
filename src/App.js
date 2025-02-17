// import { useState, useEffect } from 'react';
// import { useCountriesContext } from './contexts/CountriesContext.jsx';
// import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import { useSelector } from 'react-redux';
import Header from './features/Header/Header.jsx';
import Search from './features/Search/Search.jsx';
import CountriesList from './features/Countries/CountriesList.jsx';
import CountryDetails from './features/Countries/CountryDetails.jsx';
import LoadingIndicator from './components/LoadingIndicator.jsx';

import './App.scss';
// import store from './store';

export default function App() {
	const { isLoading } = useSelector((store) => store.countries.isLoading);
	return (
		<main className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path=":countryCode" element={<CountryDetails />} />
					<Route
						index
						element={
							<>
								<Search />
								{isLoading ? <LoadingIndicator /> : <CountriesList />}
							</>
						}
					/>
					<Route path="*" element={<p>Country not found</p>} />
				</Routes>
			</BrowserRouter>
		</main>
	);
}
