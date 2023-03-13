/** @format */

import axios from "../../util/axios";

export const videoAPI = async () => {
	const response = await axios.get("videos");
	return response.data;
};
