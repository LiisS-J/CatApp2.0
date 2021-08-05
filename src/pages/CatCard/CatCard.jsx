import React from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./CatCard.css";

function CatCard({ cat, handleDeleteCat, user }) {
  return (
    <div className="catDetails">
      <div>
        <img src={cat.imgUrl} />
      </div>
      <div>
        <h1 id="catName">{cat.name}</h1>
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
      {user.isAdmin && (
        <Link
          id="updateLink"
          to={{
            pathname: "/edit",
            state: { cat },
          }}
        >
          UPDATE CAT
        </Link>
      )}
      <div>
        <Link id="returnLink" to="/cats">
          RETURN TO LIST
        </Link>
      </div>
      <div>
        {user.isAdmin && (
          <button id="deleteBtn" onClick={() => handleDeleteCat(cat._id)}>
            DELETE CAT
          </button>
        )}
      </div>
      <hr />
      <div>
        <h2>Applicants for this cat: </h2>
      </div>
    </div>
  );
}

export default CatCard;
