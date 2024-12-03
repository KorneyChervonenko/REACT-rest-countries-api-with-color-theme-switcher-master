// import getDetails from './utils/getDetails.mjs';
import CountryButton from './CountryButton.jsx';
import './CountryDetails.scss';

export default function CountryDetails({ country, countries, setDetailsActive, setCurrentCountry }) {
	// console.log(countryName);

	// if (!countryName) return;
	if (!country) return;
	// const country = getDetails(countryName, countries);
	// const country = countries.find((country) => (country.name = countryName));
	// console.log(country);
	function handleBackClick() {
		setDetailsActive(false);
	}

	function hasNeighborStates(country) {
		return Object.hasOwn(country, 'borders') && country.borders instanceof Array && country.borders.length > 0;
	}

	// const neighborCountry = country.borders.map((countryCode) => <li>countryCode</li>);

	return (
		<div className="country-details">
			<h2 className="visually-hidden">Country Details</h2>
			<button type="button" onClick={handleBackClick}>
				BACK
			</button>

			<img className="country-flag" src={country.flag} alt={`flag of ${country.name}`} />
			<section className="country-statistic">
				<h3 className="country-name">{country.name}</h3>
				Country statistic
				{hasNeighborStates(country) && (
					<menu className="neighbor-countries-list">
						{country.borders.map((countryCode) => (
							// <li key={countryCode}>{countryCode}</li>
							<CountryButton
								key={countryCode}
								countries={countries}
								countryCode={countryCode}
								setCurrentCountry={setCurrentCountry}
							/>
						))}
					</menu>
				)}
			</section>
		</div>
	);
}
