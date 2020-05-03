const modal = document.getElementById('modal');
const btn = document.getElementById('modal-btn');
const span = document.getElementById('close');
const locationSubmitBtn = document.getElementById('location-submit');

btn.onclick = function () {
	modal.style.display = 'block';
};

span.onclick = function () {
	modal.style.display = 'none';
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

const getNewLocation = () => {
	const location = document.getElementById('location-input').value;
	return location;
};

const handleNewLocation = async () => {
	const location = getNewLocation();

	await Travel.getGeonameData(location)
		.then((result) => {
			const locationData = result.geonames;
			const data = {
				title: locationData.title,
				summary: locationData.summary,
				countryCode: locationData.countryCode,
				lng: locationData.lng,
				lat: locationData.lat,
				wikipediaUrl: locationData.wikipediaUrl,
			};
			console.log('data: ', data);
			return data;
		})
		.catch((error) => console.log('error getting data: ', error));
};

locationSubmitBtn.addEventListener('click', handleNewLocation);

export { handleNewLocation };
