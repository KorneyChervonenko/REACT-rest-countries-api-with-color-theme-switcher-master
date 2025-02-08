import { useCountriesContext } from '../contexts/CountriesContext';
import './Search.scss';

export default function Search() {
	const { region, searchQuery, dispatch } = useCountriesContext();

	const regions = [
		'Asia',
		'Europe',
		'Africa',
		'Oceania',
		'Americas',
		'Polar',
		'Antarctic Ocean',
		'Antarctic',
	];
	return (
		<form className="search">
			<input
				type="text"
				placeholder="🔎 Search for a country..."
				value={searchQuery}
				onChange={(e) =>
					dispatch({ type: 'set search query', payload: e.target.value.toLowerCase() })
				}
				required
			/>
			<select
				name="region"
				value={region}
				// onChange={(e) => setRegion(e.target.value)}
				onChange={(e) => dispatch({ type: 'set region', payload: e.target.value })}
			>
				<option value="All">Filter by region</option>
				{regions.map((region) => (
					<option value={region} key={region}>
						{region}
					</option>
				))}
				{/* <option value="Africa">Africa</option>
				<option value="Americas">Americas</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
				<option value="Polar">Polar</option>
				<option value="Antarctic Ocean">Antarctic Ocean</option>
				<option value="Antarctic">Antarctic</option> */}
			</select>
		</form>
	);
}
