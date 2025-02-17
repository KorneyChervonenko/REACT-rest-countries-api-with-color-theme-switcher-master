import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountries, setLoading, setReady } from './countriesSlice.js';

import CountryCard from './CountryCard.jsx';
// import { useCountriesContext } from '../../contexts/CountriesContext.jsx';
import './CountriesList.scss';
import useCountries from '../../shared/useCountries.mjs';

export default function CountriesList() {
	const { fetchCountries } = useCountries();

	const dispatch = useDispatch();

	const maxVisibleItems = 10;
	const [range, setRange] = useState({ start: 0, end: maxVisibleItems });
	const countries = useSelector((store) => store.countries.countries);
	const region = useSelector((store) => store.search.region);
	const searchQuery = useSelector((store) => store.search.searchQuery);

	// const { countries, region, searchQuery } = useCountriesContext();
	const countriesFilteredByRegion =
		region === 'All' ? [...countries] : countries.filter((country) => country.region === region);
	const filteredCountries =
		searchQuery === ''
			? countriesFilteredByRegion
			: countriesFilteredByRegion.filter((country) =>
					country.name.toLowerCase().startsWith(searchQuery)
			  );

	const visibleCountries = filteredCountries.slice(range.start, range.end);

	function handleScroll(e) {
		if (e.nativeEvent.wheelDeltaY < 0 && range.end < filteredCountries.length)
			setRange((currRange) => ({
				start: Math.min(filteredCountries.length - maxVisibleItems, currRange.start + 1),
				end: Math.min(filteredCountries.length, currRange.end + 1),
			}));
		if (e.nativeEvent.wheelDeltaY > 0 && range.start > 0)
			setRange((currRange) => ({
				start: Math.max(0, currRange.start - 1),
				end: Math.max(maxVisibleItems, currRange.end - 1),
			}));
	}

	useEffect(() => {
		fetchCountries();
	}, [fetchCountries]);

	return (
		<>
			<h2 className="visually-hidden">countries list</h2>
			<ul className="countries-list" onWheel={handleScroll}>
				{visibleCountries.map((country, index) => (
					<CountryCard country={country} key={country.name} />
				))}
			</ul>
		</>
	);
}
