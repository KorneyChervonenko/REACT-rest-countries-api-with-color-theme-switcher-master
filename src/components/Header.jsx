import { useState } from 'react';
import './Header.scss';

import iconMoon from '../images/icon-moon.svg';
import iconSun from '../images/icon-sun.svg';
import { useCountriesContext } from '../contexts/CountriesContext';

export default function Header() {
	function handleReset(e) {
		e.preventDefault();
		dispatch({ type: 'reset' });
	}

	const { dispatch } = useCountriesContext();

	const [colorTheme, changeColorTheme] = useState('dark');
	return (
		<header className="header">
			<h1>
				{/* remove e  */}
				<button type="reset" onClick={(e) => handleReset(e)}>
					Where in the world?
				</button>
			</h1>
			<label className="theme-switch">
				<input
					className="theme-switch-checkbox-control"
					type="checkbox"
					id="theme-switch"
					checked={colorTheme === 'dark'}
					onChange={(e) => changeColorTheme(e.target.checked ? 'dark' : 'light')}
				/>
				<span className="theme-switch-checkbox-emulator">
					{/* {colorTheme === 'light' ? '🌙 Dark Mode' : '🔆 Light Mode'} */}
					{/* {colorTheme === 'light' ? <img src={iconMoon} alt="" /> : <img src={iconSun} alt="" />} */}
					{colorTheme === 'light' ? (
						<SwitchIcon icon={iconMoon} text="Dark" />
					) : (
						<SwitchIcon icon={iconSun} text="Light" />
					)}
				</span>
			</label>
		</header>
	);
}

function SwitchIcon({ icon, text }) {
	return (
		<span
			style={{
				display: 'flex',
				columnGap: '0.5rem',
				alignItems: 'center',
				fontSize: 'inherit',
				cursor: 'pointer',
			}}
		>
			<img src={icon} alt="" style={{ inlineSize: '1em' }} />
			<span>{text} Mode</span>
		</span>
	);
}
