/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import singleVideoAPI from "./singleVideoAPI";

// intitial state
const initialState = {
	video: {},
	isLoading: false,
	isError: false,
	errorMessage: "",
};

// async thunk

export const fetchSingleVideo = createAsyncThunk("singleVideo/fetchSingleVideo", async (id) => {
	const singleVideo =await singleVideoAPI(id);

	return singleVideo;
});

// create slice

const singleVideoSlice = createSlice({
	name: "singleVideo",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSingleVideo.pending, (state, action) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchSingleVideo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.video = action.payload;
			})
			.addCase(fetchSingleVideo.rejected, (state, action) => {
				state.isLoading = false;
				state.video = {};
				state.isError = true;
				state.isErrorMessage = action.error.message;
			});
	},
});

export default singleVideoSlice.reducer;
