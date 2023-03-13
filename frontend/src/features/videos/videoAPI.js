import axios from "../../util/axios";

export const videoAPI = async (filterTags, search) => {
  let queryString = "";

  if (filterTags?.length > 0) {
    queryString += filterTags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const response = await axios.get(`videos/?${queryString}`);

  return response.data;
};

// import axios from "../../util/axios";

// export const videoAPI = async (tags, search) => {
//   let queryString = null;

//   if (tags?.length > 0) {
//     queryString = tags.map((tag) => `tags_like=${tag}`).join("&");
//   }

//   queryString = queryString ? queryString : "";

//   if (search !== "") {
//     queryString += `${queryString ? "&" : ""}q=${search}`;
//   }

//   const response = await axios.get(`videos?${queryString}`);

//   return response.data;
// };
