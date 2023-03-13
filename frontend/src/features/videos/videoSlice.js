/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { videoAPI } from "./videoAPI";

// initial state ...
const initialState = {
	videos: [],
	isLoading: false,
	isError: false,
	errorMessage: "",
};

// async thunk function
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
	const videos = await videoAPI();
	return videos;
});

// slice function function
const videoSlice = createSlice({
	name: "video",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchVideos.pending, (state, action) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchVideos.fulfilled, (state, action) => {
				state.isLoading = false;
				state.videos = action.payload;
			})
			.addCase(fetchVideos.rejected, (state, action) => {
				state.isLoading = false;
				state.videos = [];
				state.errorMessage = action.error?.message;
			});
	},
});

export default videoSlice.reducer;
