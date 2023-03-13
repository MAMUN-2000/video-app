/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../features/tags/tagSlice";
import TagItem from "./TagItem";

function TagList() {
	const dispatch = useDispatch();
	const { tags } = useSelector((state) => state.tags);

	useEffect(() => {
		dispatch(fetchTags());
	}, [dispatch]);

	if (tags.length === 0) {
		return null;
	}

	return (
		<section>
			<div className='max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto'>
				{tags.map((tag) => (
					<TagItem key={tag.id} {...tag} />
				))}
			</div>
		</section>
	);
}

export default TagList;
