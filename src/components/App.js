import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import CountriesList from './CountriesList.jsx';
import CountryDetails from './CountryDetails.jsx';

import './App.scss';

export default function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [countries, setCountries] = useState([]);
	const [isDetailsActive, setDetailsActive] = useState(false);
	// const [currentCountry, setCurrentCountry] = useState('Afghanistan');
	// const [currentCountry, setCurrentCountry] = useState(undefined);
	const [history, setHistory] = useState([]);
	const [region, setRegion] = useState('All');
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(function () {
		console.clear();
		async function fetchCountries() {
			try {
				setIsLoading(true);
				// let response, data;
				// response = await fetch(`http://ip-api.com/json/${currentIP}`);
				// response = await fetch(`https://freeipapi.com/api/json/${currentIP}`);
				const response = await fetch('data.json');
				// console.log(response);
				if (!response.ok) throw new Error('Something went wrong with fetching data');
				const data = await response.json();
				// console.log(data);
				// if (data.error) throw new Error('Invalid IP Address');
				// setCountries(data.slice(0, 8));
				setCountries(data);
				// console.log(countries);
			} catch (error) {
				console.log(error.message);
				alert(error.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchCountries();
	}, []);
	return (
		<main className="App">
			<Header />
			{history.length > 0 && isDetailsActive ? (
				<>
					{/* {currentCountry} */}
					<CountryDetails
						// key={currentCountry.name}
						key={history.at(-1).name}
						// currentCountry={currentCountry}
						countries={countries}
						setDetailsActive={setDetailsActive}
						// setCurrentCountry={setCurrentCountry}
						history={history}
						setHistory={setHistory}
					/>
				</>
			) : (
				<>
					<Search region={region} setRegion={setRegion} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
					<CountriesList
						searchQuery={searchQuery}
						region={region}
						countries={countries}
						setDetailsActive={setDetailsActive}
						// setCurrentCountry={setCurrentCountry}
						setHistory={setHistory}
					/>
				</>
			)}
		</main>
	);
}
