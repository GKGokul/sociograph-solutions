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

export const sortDataMisc = (data, keySelect, order, keyVal, key = "") => {
	if (keyVal === "value") {
		let level = keySelect;
		level = level.split(".");

		let currentObjState = data;

		for (let i = 0; i < level.length; i++) {
			currentObjState = currentObjState[level[i]];
		}
		// console.log(currentObjState);

		let sortedList = [];

		sortedList = Object.entries(currentObjState).sort((a, b) => {
			if (b[1] > a[1]) return order === 1 ? 1 : -1;
			else if (b[1] < a[1]) return order === 1 ? -1 : 1;
			else {
				if (a[0] > b[0]) return order === 1 ? 1 : -1;
				else if (a[0] < b[0]) return order === 1 ? -1 : 1;
				else return 0;
			}
		});

		let sortedObject = {};
		// sortedList.map(([key, value]) => {
		// 	// console.log(key, value);
		// 	sortedObject[key] = value;
		// 	console.log(JSON.stringify(sortedObject));
		// });

		// let mapp = new Map(sortedList);
		Object.fromEntries(
			Object.entries(sortedList).map(([k, v], i) => {
				return (sortedObject[k] = sortedObject[v]);
			})
		);
		//
		// console.log(objectMap(myObject, (v) => 2 * v));
		// console.log(JSON.stringify(sortedObject));

		// return sortedObject;
	} else if (keyVal === "key") {
	}
};

export const sortDataOnKey = (data, key) => {
	key = key.split(".");

	data.sort((a, b) => {
		let i = 0;
		while (i < key.length) {
			a = a[key[i]];
			b = b[key[i]];
			i++;
		}
		if (a < b) {
			return -1;
		} else if (a > b) {
			return 1;
		} else {
			return 0;
		}
	});

	return data;
};
