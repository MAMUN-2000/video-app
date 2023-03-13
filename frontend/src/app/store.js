import { configureStore } from '@reduxjs/toolkit';
import relatedVideoReducer from "../features/relatedVideo/relatedVideoSlice";
import singleVideoReducer from '../features/singleVideo/singleVideoSlice';
import tagsReducer from '../features/tags/tagSlice';
import videoReducer from '../features/videos/videoSlice';

export const store = configureStore({
	reducer: {
		videos: videoReducer,
		tags: tagsReducer,
		singleVideo: singleVideoReducer,
		relatedVideos:relatedVideoReducer
	},
});
