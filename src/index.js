import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App.js';
import { CountriesContextProvider } from './contexts/CountriesContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<CountriesContextProvider>
			<App />
		</CountriesContextProvider>
	</React.StrictMode>
);
