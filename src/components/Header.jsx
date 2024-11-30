import { useState } from 'react';
import './Header.scss';

export default function Header() {
	const [colorTheme, changeColorTheme] = useState('light');
	return (
		<header className="header">
			<h1>Where in the world?</h1>
			<label className="theme-switch">
				<input
					className="theme-switch-checkbox-control"
					type="checkbox"
					id="theme-switch"
					checked={colorTheme === 'dark'}
					onChange={(e) => changeColorTheme(e.target.checked ? 'dark' : 'light')}
				/>
				<span className="theme-switch-checkbox-emulator">
					{colorTheme === 'light' ? '🌙 Dark Mode' : '🔆 Light Mode'}
				</span>
			</label>
		</header>
	);
}
