/** @format */

import axios from "../../util/axios";

//localhost:9000/videos?tags_like=react&id_ne=1&_limit=5

export default async function relatedVideoAPI({ tags, id }) {
	const queryString =
		tags?.length > 0
			? tags.map((tag) => `tags_like=${tag}`).join("&") + `&id_ne=${id}`
			: `&id_ne=${id}`;

	const response = await axios.get(`videos?${queryString}`);

	return response.data;
}
