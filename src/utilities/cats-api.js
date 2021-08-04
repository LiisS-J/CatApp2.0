const BASE_URL = "/api/cats";

const catsAPI = {
  getAll,
  create,
  update
};

async function getAll() {
  return await fetch(BASE_URL).then((res) => res.json());
}

async function create(newCatData) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newCatData),
  }).then((res) => res.json());
}

export function update(updatedCatData) {
  return fetch(`${BASE_URL}/${updatedCatData._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(updatedCatData),
  }).then(res => res.json());
}

export default catsAPI;
