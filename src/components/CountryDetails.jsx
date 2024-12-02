// import getDetails from './utils/getDetails.mjs';
import './CountryDetails.scss';

export default function CountryDetails({ country }) {
	// console.log(countryName);

	// if (!countryName) return;
	if (!country) return;
	// const country = getDetails(countryName, countries);
	// const country = countries.find((country) => (country.name = countryName));
	// console.log(country);

	return (
		<div className="country-details">
			Country Details
			<h2 className="visually-hidden">Country Details</h2>
			<p>{country.name}</p>
			{/* <img src={country.flag} alt="" /> */}
		</div>
	);
}
