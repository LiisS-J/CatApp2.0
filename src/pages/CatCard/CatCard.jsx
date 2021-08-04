import React from "react";
import { Link } from "react-router-dom";

function CatCard({ cat, handleDeleteCat }) {
  return (
    <div>
        <div><img src={cat.imgUrl}/></div>
      <div>
        <h1>{cat.name}</h1>
      </div>
      <div>
        <div>
          <b>ID:</b> {cat._id}
        </div>
        <div>
          <b>Name:</b> {cat.name}
        </div>
        <div>
          <b>Sex:</b> {cat.sex}
        </div>
        <div>
          <b>Age:</b> {cat.age}
        </div>
        <div>
          <b>Breed:</b> {cat.breed}
        </div>
        <div>
          <b>Health Condition:</b> {cat.health}
        </div>
        <div>
          <b>Adoption Status:</b> {cat.adoptionStatus}
        </div>
      </div>
      <Link
        to={{
          pathname: "/edit",
          state: { cat },
        }}
      >
        UPDATE CAT
      </Link>
      <div>
        <Link to="/cats">RETURN TO LIST</Link>
      </div>
      <div>
        <button onClick={() => handleDeleteCat(cat._id)}>DELETE</button>
      </div>
      <hr />
      <div>Applicants for this cat: </div>
    </div>
  );
}

export default CatCard;
