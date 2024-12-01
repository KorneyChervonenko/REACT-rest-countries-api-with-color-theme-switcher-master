import './CountriesCard.scss';
export default function CountryCard({ country }) {
	const cardStyle = { backgroundImage: `url(${country.flag})` };
	return (
		<li className="country-card" style={cardStyle}>
			{country.name}
		</li>
	);
}
