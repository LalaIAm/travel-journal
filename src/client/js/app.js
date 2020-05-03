const submitLocationBtn = document.getElementById( 'location-submit' );


const sendData = async ( url = '', data = {} ) => {
	console.log('post request: ', data);
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const dataToSend = JSON.stringify(data);

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: dataToSend,
		redirect: 'follow',
	};

	return fetch(url, requestOptions)
		.then((response) => response.json())
		.then((jsonResponse) => {
			return jsonResponse;
		})
		.catch((error) => console.log(error));
};

const getData = async (url = '') => {
	const response = fetch(url);

	const jsonResponse = await response.json();
	return jsonResponse;
};

export { sendData, getData };
