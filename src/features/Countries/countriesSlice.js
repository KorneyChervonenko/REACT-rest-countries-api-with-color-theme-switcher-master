import { createSlice } from '@reduxjs/toolkit';

const initialState = { countries: [], isLoading: false };

const countriesSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {
		setLoading(state) {
			state.isLoading = true;
		},

		setReady(state) {
			state.isLoading = false;
		},

		setCountries(state, action) {
			state.countries = action.payload;
		},

		reset(state) {
			state = { ...initialState, countries: state.countries };
		},
	},
});

export default countriesSlice.reducer;

export const { setLoading, setReady, setCountries, reset } = countriesSlice.actions;
