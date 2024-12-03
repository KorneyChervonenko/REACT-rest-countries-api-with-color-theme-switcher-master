import CountryCard from './CountryCard.jsx';

import './CountriesList.scss';

export default function CountriesList({ countries, setDetailsActive, setCurrentCountry }) {
	return (
		<>
			<h2 className="visually-hidden">countries list</h2>
			<ul className="countries-list">
				{countries.map((country, index) => (
					<CountryCard
						key={country.name}
						country={country}
						setDetailsActive={setDetailsActive}
						setCurrentCountry={setCurrentCountry}
					/>
				))}
			</ul>
		</>
	);
}
