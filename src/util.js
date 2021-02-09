import axios from "axios";

// http://www.i2ce.in/review/<pid>/<uid>
export const fetchData = (url, productId, viewerId) => {
	console.log("FETCHING: ", `${url}/reviews/${productId}/${viewerId}`);
	// const response = await axios.get(`${url}/reviews/${productId}/${viewerId}`);
	// return response.data;

	return axios
		.get(`${url}/reviews/${productId}/${viewerId}`)
		.then((response) => response.data);
};
