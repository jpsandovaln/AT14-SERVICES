import axios from "axios";

const baseUrl = "http://localhost:8080";

export async function getImage() {
	try {
		const response = await axios({
			url: `${baseUrl}/analize`,
			method: "GET",
		});

		return response;
	} catch (e) {
		console.log(e);
	}
}

export async function sendSearch(searchData) {
	try {
		const response = await axios({
			url: `${baseUrl}/analize`,
			method: "POST",
			data: searchData,
		});

		console.log(response);
		return response;
	} catch (e) {
		console.log(e);
	}
}

export async function getFile() {
	try {
		const response = await axios({
			url: `${baseUrl}/file`,
			method: "GET",
		});

		return response;
	} catch (e) {
		console.log(e);
	}
}

export async function sendFile(file) {
	try {
		const response = await axios({
			url: `${baseUrl}/file`,
			method: "POST",
			data: file,
		});

		console.log(response);
		return response;
	} catch (e) {
		console.log(e);
	}
}
