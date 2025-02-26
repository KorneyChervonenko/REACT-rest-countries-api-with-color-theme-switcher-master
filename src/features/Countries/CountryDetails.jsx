// import getDetails from './utils/getDetails.mjs';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
// import { useCountriesContext } from '../../contexts/CountriesContext.jsx';
import useCountries from '../../shared/useCountries.mjs';

import CountryButton from './CountryButton.jsx';
import './CountryDetails.scss';

function hasNeighborStates(country) {
	return (
		// Object.hasOwn(country, 'borders') && country.borders instanceof Array && country.borders.length > 0
		country?.borders?.length > 0
	);
}

export default function CountryDetails() {
	useEffect(() => {
		if (countries.length === 0) fetchCountries();
	}, []);
	// console.log(countryName);
	const navigate = useNavigate();
	const { countryCode } = useParams();
	const { fetchCountries } = useCountries();
	const countries = useSelector((store) => store.countries.countries);
	// const { countries } = useCountriesContext();
	const currentCountry = countries.find(
		(country) => country.alpha3Code === countryCode.toUpperCase()
	);
	if (!currentCountry) return;

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
