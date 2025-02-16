// import getDetails from './utils/getDetails.mjs';
import { useNavigate, useParams } from 'react-router';
import { useCountriesContext } from '../contexts/CountriesContext.jsx';

import CountryButton from './CountryButton.jsx';
import './CountryDetails.scss';

export default function CountryDetails() {
	// console.log(countryName);
	const { countryCode } = useParams();
	const { countries } = useCountriesContext();
	const navigate = useNavigate();
	const currentCountry = countries.find((country) => country.alpha3Code === countryCode);
	if (!currentCountry) return;

	function hasNeighborStates(country) {
		return (
			Object.hasOwn(country, 'borders') &&
			currentCountry.borders instanceof Array &&
			currentCountry.borders.length > 0
		);
	}

	return (
		<>
			<button className="back-button" type="button" onClick={() => navigate(-1)}>
				⬅ Back
			</button>

			<div className="country-details">
				<h2 className="visually-hidden">Country Details</h2>

				<img
					className="country-flag"
					src={currentCountry.flag}
					alt={`flag of ${currentCountry.name}`}
				/>
				<section className="country-statistic">
					<h3 className="country-name">{currentCountry.name}</h3>
					{/* Country statistic */}
					<table className="statistic-table">
						<tbody>
							<tr>
								<th scope="row">Native Name:</th>
								<td>{currentCountry?.nativeName}</td>
							</tr>
							<tr>
								<th scope="row">Population:</th>
								<td>{currentCountry?.population}</td>
							</tr>
							<tr>
								<th scope="row">Region:</th>
								<td>{currentCountry?.region}</td>
							</tr>
							<tr>
								<th scope="row">Sub Region:</th>
								<td>{currentCountry?.subregion}</td>
							</tr>
							<tr>
								<th scope="row">Capital:</th>
								<td>{currentCountry?.capital}</td>
							</tr>
							<tr>
								<th scope="row">Top Level Domain:</th>
								<td>{currentCountry?.topLevelDomain}</td>
							</tr>
							<tr>
								<th scope="row">Currencies:</th>
								<td>{currentCountry?.currencies.map((currency) => currency.name).join(', ')}</td>
							</tr>
							<tr>
								<th scope="row">Languages:</th>
								<td>{currentCountry?.languages.map((language) => language.name).join(', ')}</td>
							</tr>
						</tbody>
					</table>
					{hasNeighborStates(currentCountry) && (
						<table className="neighbor-countries">
							<tbody>
								<tr>
									<th scope="row">Border Countries:</th>
									<td>
										<menu className="neighbor-countries-list">
											{currentCountry.borders.map((countryCode) => (
												<CountryButton key={countryCode} countryCode={countryCode} />
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
