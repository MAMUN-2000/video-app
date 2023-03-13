/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../features/videos/videoSlice";
import Loading from "./Loading";
import VideoItem from "./VideoItem";

function VideoList() {
	const dispatch = useDispatch();
	const { videos, isLoading, isError, errorMessage } = useSelector((state) => state.videos);

	useEffect(() => {
		dispatch(fetchVideos());
	}, [dispatch]);

	// what is need to render
	let content;

	if (isLoading) {
		content = <Loading />;
	} else if (isError) {
		content = (
			<h1 className='text-uppercase text-2xl text-red-600'>
				there something wrong ! {errorMessage}{" "}
			</h1>
		);
	} else if (!isLoading && !isError && videos?.length > 0) {
		content = videos.map((video) => <VideoItem {...video}  key={video.id } />);
	} else if (!isLoading && !isError && videos?.length === 0) {
		content = <h1 className='text-uppercase text-2xl text-red-600'>no video found !</h1>;
	}

	return (
		<section className='pt-12'>
			<section className='pt-12'>
				<div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]'>
					{content}
				</div>
			</section>
		</section>
	);
}

export default VideoList;
