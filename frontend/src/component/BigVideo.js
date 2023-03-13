/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import likeIcon from "../assets/like.svg";
import unlikeIcon from "../assets/unlike.svg";
import { fetchSingleVideo } from "../features/singleVideo/singleVideoSlice";

function BigVideo() {
	const { videoId } = useParams();
	const [trunkDescription, setTrunkDescription] = useState(false);
	const { video } = useSelector((state) => state.singleVideo);
	const { title, date, description, link, likes, unlikes } = video;
	const disptach = useDispatch();
	useEffect(() => {
		disptach(fetchSingleVideo(Number(videoId)));
	}, [disptach, videoId]);

	const truncateString = (str, num) => {
		if (str?.length > num) {
			return str.slice(0, num) + "...";
		} else {
			return str;
		}
	};

	return (
		<div className='col-span-full w-full space-y-8 lg:col-span-2'>
			<iframe
				width='100%'
				className='aspect-video'
				src={link}
				title='Some video title'
				frameBorder=''
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen></iframe>

			<div>
				<h1 className='text-lg font-semibold tracking-tight text-slate-800'>{title}</h1>
				<div className='pb-4 flex items-center space-between border-b'>
					<h2 className='text-sm leading-[1.7142857] text-slate-600 w-full'>Uploaded on {date}</h2>

					<div className='flex gap-10 w-48'>
						<div className='flex gap-1'>
							<div className='shrink-0'>
								<img className='w-5 block cursor-pointer' src={likeIcon} alt='Like' />
							</div>
							<div className='text-sm leading-[1.7142857] text-slate-600'>{likes}k</div>
						</div>
						<div className='flex gap-1'>
							<div className='shrink-0'>
								<img className='w-5 block cursor-pointer' src={unlikeIcon} alt='Unlike' />
							</div>
							<div className='text-sm leading-[1.7142857] text-slate-600'>{unlikes}K</div>
						</div>
					</div>
				</div>

				<div className='mt-4 text-sm text-[#334155] dark:text-slate-400'>
					{trunkDescription ? description : truncateString(description, 50)}
					<button
						className='mx-5 capitalize font-bold text-blue-500'
						onClick={() => setTrunkDescription((prev) => !prev)}>
						{!trunkDescription ? "see more..." : "see less"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default BigVideo;
