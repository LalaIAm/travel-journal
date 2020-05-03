import { config } from './config';

const geoUrl = config.GEONAMES_URL;
const geoUsername = config.GEONAMES_USERNAME;

const getGeonameData = async (city) => {
	const requestOptions = {
		method: 'GET',
		redirect: 'follow',
	};

	try {
        const response = await fetch( `http://api.geonames.org/wikipediaSearchJSON?q=${ city }&maxRows=1&username=${ geoUsername }`, requestOptions );
       // const result = await response.json();
        console.log('geonames result: ', response );
        return response;
    }
    catch ( error ) {
        return console.log( 'error', error );
    }
};
export { getGeonameData };
