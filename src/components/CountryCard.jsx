import { memo } from 'react';
import { Link } from 'react-router';
import './CountriesCard.scss';

function areCountriesEqual(previous, current) {
	const areEqual = previous.country.alpha3Code === current.country.alpha3Code;
	return areEqual;
}

function CountryCard({ country }) {
	return (
		<li>
			<Link to={country.alpha3Code} className="country-card">
				<img src={country.flag} alt={`flag of ${country.name}`} className="country-flag" />
				<table className="country-info">
					<caption className="country-name">{country.name}</caption>
					<tbody>
						<tr>
							<th scope="row">Population:</th>
							<td>{country.population}</td>
						</tr>
						<tr>
							<th scope="row">Region:</th>
							<td>{country.region}</td>
						</tr>
						<tr>
							<th scope="row">Capital:</th>
							<td>{country.capital}</td>
						</tr>
					</tbody>
				</table>
			</Link>
		</li>
	);
}

export default memo(CountryCard, areCountriesEqual);
