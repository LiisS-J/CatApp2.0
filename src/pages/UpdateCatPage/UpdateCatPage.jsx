import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function UpdateCatPage(props) {
    const location = useLocation();

    const [invalidForm, setValidForm] = useState(true);
    const[formData, setFormData] = useState(location.state.cat);

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity()
        ? setValidForm(false)
        : setValidForm(true);
    }, [formData])
   
    const handleSubmit = e => {
        e.preventDefault();
        props.handleUpdateCat(formData);
    };

    const handleChange = e => {
        setFormData ({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
    
            <h1>Edit Cat</h1>
            <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>
            <b>URL to the cat photo:</b>
          </label>
          <input
            name="url"
            type="url"
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
          EDIT CAT
        </button>
        &nbsp;&nbsp;
				<Link to='/cats'>CANCEL</Link>
      </form>
        </>
    )    
}

export default UpdateCatPage;