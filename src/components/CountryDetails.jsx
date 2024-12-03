// import getDetails from './utils/getDetails.mjs';
import './CountryDetails.scss';

export default function CountryDetails({ country, setDetailsActive }) {
	// console.log(countryName);

	// if (!countryName) return;
	if (!country) return;
	// const country = getDetails(countryName, countries);
	// const country = countries.find((country) => (country.name = countryName));
	// console.log(country);
	function handleBackClick() {
		setDetailsActive(false);
	}

	return (
		<div className="country-details">
			<h2 className="visually-hidden">Country Details</h2>
			<button type="button" onClick={handleBackClick}>
				BACK
			</button>
			Country Details
			<img className="country-details__flag" src={country.flag} alt={`flag of ${country.name}`} />
			<section className="country-details__statistic">
				<h3 className="country-details__name">{country.name}</h3>
				Country statistic
				<menu className="country-details__border-countries"></menu>
			</section>
		</div>
	);
}
