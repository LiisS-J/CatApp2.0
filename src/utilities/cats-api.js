const BASE_URL = '/api/cats';

const catsAPI = {
    getAll
}

async function getAll() {
	return await fetch(BASE_URL).then(res => res.json());
}

export default catsAPI;