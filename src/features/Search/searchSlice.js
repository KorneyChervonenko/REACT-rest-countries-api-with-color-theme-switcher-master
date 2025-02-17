import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchQuery: '', region: 'All' };

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setQuery(state, action) {
			state.searchQuery = action.payload;
		},

		setRegion(state, action) {
			state.region = action.payload;
		},
	},
});

export default searchSlice.reducer;

export const { setQuery, setRegion } = searchSlice.actions;
