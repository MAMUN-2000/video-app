/** @format */

import axios from "../../util/axios";

export default async function tagAPI() {
	const response = await axios.get("/tags");

	return response.data;
}
