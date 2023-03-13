/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tagAPI from "./tagAPI";

// initial state
const initialState = {
	tags: [],
	isLoading: false,
	isError: false,
	errorMessage: "",
};

// async thunk
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
	const data = await tagAPI();

	return data;
});

// create tag slice

const tagSlice = createSlice({
	name: "tags",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchTags.pending, (state, action) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchTags.fulfilled, (state, action) => {
				state.isLoading = false;
				state.tags = action.payload;
			})
			.addCase(fetchTags.rejected, (state, action) => {
				state.isLoading = false;
				state.tags = [];
            state.errorMessage = action.error.message;
            state.isError  = true;
			});
	},
});

export default tagSlice.reducer;
