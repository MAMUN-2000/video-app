/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import relatedVideoAPI from "./relatedVideoAPI";

// initial state
const initialState = {
	relatedVideos: [],
	isLoading: false,
	isError: false,
	errorMessage: "",
};

// async thunk
export const fetchRelatedVideo = createAsyncThunk(
	"relatedVideo/fetchRelatedVideo",
	async ({ tags, id }) => {
		const relatedVideo = await relatedVideoAPI({ tags, id });

		return relatedVideo;
	}
);

// create related video slice
const relatedVideoSlice = createSlice({
	name: "relatedVideo",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRelatedVideo.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
				state.relatedVideos = [];
			})
			.addCase(fetchRelatedVideo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.relatedVideos = action.payload;
			})
			.addCase(fetchRelatedVideo.rejected, (state, action) => {
				state.isLoading = false;
				state.relatedVideos = [];
				state.isError = true;
				state.errorMessage = action.error.message;
			});
	},
});

export default relatedVideoSlice.reducer;
