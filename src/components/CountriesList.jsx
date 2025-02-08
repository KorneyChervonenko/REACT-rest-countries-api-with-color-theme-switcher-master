import CountryCard from './CountryCard.jsx';

import './CountriesList.scss';
import { useCountriesContext } from '../contexts/CountriesContext.jsx';

export default function CountriesList() {
	const { countries, region, searchQuery } = useCountriesContext();
	const countriesFilteredByRegion =
		region === 'All' ? [...countries] : countries.filter((country) => country.region === region);
	const filteredCountries =
		searchQuery === ''
			? countriesFilteredByRegion
			: countriesFilteredByRegion.filter((country) =>
					country.name.toLowerCase().startsWith(searchQuery)
			  );

	return (
		<>
			<h2 className="visually-hidden">countries list</h2>
			<ul className="countries-list">
				{filteredCountries.map((country, index) => (
					<CountryCard country={country} key={country.name} />
				))}
			</ul>
		</>
	);
}
