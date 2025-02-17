import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from './features/Search/searchSlice';
import countriesSliceReducer from './features/Countries/countriesSlice';
// import dataReducer from './features/Data/dataSlice';

const store = configureStore({
	reducer: {
		search: searchSliceReducer,
		countries: countriesSliceReducer,
	},
});

export default store;
