import { useCountriesContext } from '../contexts/CountriesContext';
import './CountriesCard.scss';
export default function CountryCard({ country }) {
	const { dispatch } = useCountriesContext();
	// const cardStyle = {};
	return (
		<li
			className="country-card"
			// style={cardStyle}
			onClick={() => dispatch({ type: 'add to history', payload: country })}
		>
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
		</li>
	);
}
