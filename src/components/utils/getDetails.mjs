// import { countriesData } from './countries-data.mjs';
// console.clear();

export default function getDetails(countryName, countriesData) {
	// console.log(countryName);
	// console.log('it works');
	const result = countriesData.find((country) => (country.name = countryName));
	// console.log(result);
	return result;
}

// console.log(getDetails('Ukraine', countriesData));
