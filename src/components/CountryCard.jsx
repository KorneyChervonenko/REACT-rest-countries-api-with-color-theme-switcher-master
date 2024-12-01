import './CountriesCard.scss';
export default function CountryCard({ country }) {
	return <li className="country-card">{country.name}</li>;
}
