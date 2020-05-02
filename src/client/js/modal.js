const modal = document.getElementById('modal');
const btn = document.getElementById('modal-btn');
const span = document.getElementById( 'close' );


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
    const location = document.getElementById( 'location-input' ).value 
    return location;
}

const handleNewLocation = () => {
    const location = getNewLocation();

    Travel.sendData( 'http://localhost:4000/location', {
        location: location
    } ).then( result => console.log( result ) )
        .catch( error => console.log( error ) );
}


export { handleNewLocation };