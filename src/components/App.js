// import { useState, useEffect } from 'react';
import { useCountriesContext } from '../contexts/CountriesContext.jsx';
import Header from './Header.jsx';
import Search from './Search.jsx';
import CountriesList from './CountriesList.jsx';
import CountryDetails from './CountryDetails.jsx';
import LoadingIndicator from './LoadingIndicator.jsx';

import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router';

export default function App() {
	const { history, isLoading } = useCountriesContext();
	return (
		<main className="App">
			{/* <Header />
			{history.length > 0 ? (
				<CountryDetails key={history.at(-1).name} />
			) : (
				<>
					<Search />
					{isLoading ? <LoadingIndicator /> : <CountriesList />}
				</>
			)} */}
			<Header />
			<BrowserRouter>
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
