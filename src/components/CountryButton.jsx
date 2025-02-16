import { Link } from 'react-router';
import { useCountriesContext } from '../contexts/CountriesContext';
import './CountryButton.scss';

export default function CountryButton({ countryCode }) {
	const { countries, dispatch } = useCountriesContext();
	const country = countries.find((country) => country.alpha3Code === countryCode);

	return (
		<li className="country-button">
			<Link to={`/${country.alpha3Code}`}>{country.name}</Link>
			{/* <button type="button" onClick={() => dispatch({ type: 'add to history', payload: country })}>
				{country.name}
			</button> */}
		</li>
	);
}
