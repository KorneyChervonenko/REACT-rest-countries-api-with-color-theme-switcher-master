import { useState } from 'react';
import CountryCard from './CountryCard.jsx';
import { useCountriesContext } from '../contexts/CountriesContext.jsx';
import './CountriesList.scss';

export default function CountriesList() {
	const maxVisibleItems = 10;
	const [range, setRange] = useState({ start: 0, end: maxVisibleItems });
	const { countries, region, searchQuery } = useCountriesContext();
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
