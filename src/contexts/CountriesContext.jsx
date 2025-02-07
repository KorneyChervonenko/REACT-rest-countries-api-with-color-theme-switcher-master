import { createContext, useContext, useReducer } from 'react';

const initialState = {};
const CountriesContext = createContext();

function getInitialState() {
	return initialState;
}

function reducer(state, action) {
	// console.log(action.type, action.payload.name);
	switch (action.type) {
		case '':
			return { ...state };
		default:
			throw new Error('Unknown action type');
	}
}

function CountriesContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, undefined, getInitialState);

	return <CountriesContext.Provider value={{ dispatch }}>{children}</CountriesContext.Provider>;
}

function useCountriesContext() {
	const context = useContext(CountriesContext);
	if (context === undefined)
		throw new Error('CountriesContext was used outside the CountriesContextProvider');
	return context;
}

export { CountriesContextProvider, useCountriesContext };
