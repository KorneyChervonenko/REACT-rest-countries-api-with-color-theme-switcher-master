import './Search.scss';

export default function Search() {
	return (
		<form className="search">
			<input type="text" placeholder="🔎 Search for a country..." required />
			<select name="region">
				<option value="all">Filter by region</option>
				<option value="africa">Africa</option>
				<option value="america">America</option>
				<option value="asia">Asia</option>
				<option value="europe">Europe</option>
				<option value="oceania">Oceania</option>
			</select>
		</form>
	);
}
