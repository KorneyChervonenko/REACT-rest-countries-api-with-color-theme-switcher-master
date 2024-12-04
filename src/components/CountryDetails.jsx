// import getDetails from './utils/getDetails.mjs';
import CountryButton from './CountryButton.jsx';
import './CountryDetails.scss';

export default function CountryDetails({ country, countries, setDetailsActive, setCurrentCountry }) {
	// console.log(countryName);

	if (!country) return;

	// TODO return to previous country

	function handleBackClick() {
		setDetailsActive(false);
	}

	function hasNeighborStates(country) {
		return Object.hasOwn(country, 'borders') && country.borders instanceof Array && country.borders.length > 0;
	}

	// const neighborCountry = country.borders.map((countryCode) => <li>countryCode</li>);

	return (
		<>
			<button className="back-button" type="button" onClick={handleBackClick}>
				⬅ BACK
			</button>

			<div className="country-details">
				<h2 className="visually-hidden">Country Details</h2>

				<img className="country-flag" src={country.flag} alt={`flag of ${country.name}`} />
				<section className="country-statistic">
					<h3 className="country-name">{country.name}</h3>
					{/* Country statistic */}
					<table className="statistic-table">
						<tbody>
							<tr>
								<th scope="row">Native Name:</th>
								<td>{country?.nativeName}</td>
							</tr>
							<tr>
								<th scope="row">Population:</th>
								<td>{country?.population}</td>
							</tr>
							<tr>
								<th scope="row">Region:</th>
								<td>{country?.region}</td>
							</tr>
							<tr>
								<th scope="row">Sub Region:</th>
								<td>{country?.subregion}</td>
							</tr>
							<tr>
								<th scope="row">Capital:</th>
								<td>{country?.capital}</td>
							</tr>
							<tr>
								<th scope="row">Top Level Domain:</th>
								<td>{country?.topLevelDomain}</td>
							</tr>
							<tr>
								<th scope="row">Currencies:</th>
								<td>{country?.currencies.map((currency) => currency.name).join(', ')}</td>
							</tr>
							<tr>
								<th scope="row">Languages:</th>
								<td>{country?.languages.map((language) => language.name).join(', ')}</td>
							</tr>
						</tbody>
					</table>
					{hasNeighborStates(country) && (
						<table className="neighbor-countries">
							<tbody>
								<tr>
									<th scope="row">Border Countries:</th>
									<td>
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
									</td>
								</tr>
							</tbody>
						</table>
					)}
				</section>
			</div>
		</>
	);
}
