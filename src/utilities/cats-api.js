const { sendRequest } = require("./users-api");
const BASE_URL = "/api/cats";

const catsAPI = {
  getAll,
  create,
  update,
  deleteOne,
};

async function getAll() {
  return await fetch(BASE_URL).then((res) => res.json());
}

async function create(newCatData) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(newCatData),
  }).then((res) => res.json());
}

export function update(updatedCatData) {
  return fetch(`${BASE_URL}/${updatedCatData._id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(updatedCatData),
  }).then((res) => res.json());
}

export function deleteOne(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}

export default catsAPI;
