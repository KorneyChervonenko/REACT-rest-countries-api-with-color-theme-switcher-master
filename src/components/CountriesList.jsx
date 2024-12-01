import './CountriesList.scss';

export default function CountriesList({ countries }) {
	return (
		<>
			<h2 className="visually-hidden">countries list</h2>
			<ul className="countries-list">
				{countries.map((country, index) => (
					<CountryCard country={country} key={index} />
				))}
			</ul>
		</>
	);
}

function CountryCard(country = { country }) {
	return <li>Country</li>;
}
