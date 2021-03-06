import React, { Component, useState, useRef, useEffect } from "react";

function AddCatPage(props) {
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    imgUrl: "",
    name: "",
    sex: "F",
    age: 1,
    breed: "Mixed",
    health: "Good",
    adoptionStatus: "Available",
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddCat(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      style={{
        border: "4px solid black",
        borderRadius: "10px",
        padding: "50px 80px",
        margin: "100px 150px",
      }}
    >
      <h1>Add a New Cat</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>
            <b>URL to the cat photo:</b>
          </label>
          <input
            name="imgUrl"
            value={formData.imgUrl}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <b>Name:</b>
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>
            <b>Sex:</b>
          </label>
          <input
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>
            <b>Age:</b>
          </label>
          <input name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label>
            <b>Breed:</b>
          </label>
          <input
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>
            <b>Health Condition:</b>
          </label>
          <input
            name="health"
            value={formData.health}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>
            <b>Adoption Status:</b>
          </label>
          <input
            name="adoptionStatus"
            value={formData.adoptionStatus}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn" disabled={invalidForm}>
          ADD CAT
        </button>
      </form>
    </div>
  );
}

export default AddCatPage;
