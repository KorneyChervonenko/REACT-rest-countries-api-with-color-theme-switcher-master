import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import CountriesList from './CountriesList.jsx';

import './App.scss';

export default function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [countries, setCountries] = useState([]);

	useEffect(function () {
		async function fetchIPinfo() {
			try {
				setIsLoading(true);
				// let response, data;
				// response = await fetch(`http://ip-api.com/json/${currentIP}`);
				// response = await fetch(`https://freeipapi.com/api/json/${currentIP}`);
				const response = await fetch('data.json');
				// console.log(response);
				if (!response.ok) throw new Error('Something went wrong with fetching data');
				const data = await response.json();
				console.log(data);
				// if (data.error) throw new Error('Invalid IP Address');
				// alert(data.query);
				// setCurrentIP(data.ip);
				// setIPAddressInfo(data);
				setCountries(data.slice(0, 8));
			} catch (error) {
				console.log(error.message);
				alert(error.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchIPinfo();
	}, []);
	return (
		<main className="App">
			<Header />
			<Search />
			<CountriesList countries={countries} />
		</main>
	);
}
