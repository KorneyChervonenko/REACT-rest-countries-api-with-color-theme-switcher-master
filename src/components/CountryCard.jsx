import { memo } from 'react';
import { useCountriesContext } from '../contexts/CountriesContext';
import './CountriesCard.scss';
import { Link } from 'react-router';

function areCountriesEqual(previous, current) {
	const areEqual = previous.country.alpha3Code === current.country.alpha3Code;
	// console.log(previous.dessert, current.dessert, areEqual);
	// console.log(previous.dessert, current.dessert, areEqual);
	// if (!areEqual) console.log(previous.country.name);
	return areEqual;
}

function CountryCard({ country }) {
	const { dispatch } = useCountriesContext();
	// const cardStyle = {};
	return (
		<li
		// className="country-card"
		// style={cardStyle}
		// onClick={() => dispatch({ type: 'add to history', payload: country })}
		>
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
		// <li
		// 	className="country-card"
		// 	// style={cardStyle}
		// 	onClick={() => dispatch({ type: 'add to history', payload: country })}
		// >
		// 	<img src={country.flag} alt={`flag of ${country.name}`} className="country-flag" />
		// 	<table className="country-info">
		// 		<caption className="country-name">{country.name}</caption>
		// 		<tbody>
		// 			<tr>
		// 				<th scope="row">Population:</th>
		// 				<td>{country.population}</td>
		// 			</tr>
		// 			<tr>
		// 				<th scope="row">Region:</th>
		// 				<td>{country.region}</td>
		// 			</tr>
		// 			<tr>
		// 				<th scope="row">Capital:</th>
		// 				<td>{country.capital}</td>
		// 			</tr>
		// 		</tbody>
		// 	</table>
		// </li>
	);
}

export default memo(CountryCard, areCountriesEqual);
