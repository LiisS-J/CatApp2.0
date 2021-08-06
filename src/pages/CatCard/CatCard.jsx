import React from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./CatCard.css";

function CatCard({ cat, handleDeleteCat, user }) {
  return (
    <div
      className="catDetails"
      style={{
        border: "4px solid black",
        borderRadius: "10px",
        margin: "40px 150px",
      }}
    >
      <div>
        <img src={cat.imgUrl} />
      </div>
      <div>
        <h1>{cat.name}</h1>
      </div>

      <div>
        <div>
          <p>
            <b>ID:</b> {cat._id}
          </p>
        </div>
        <div>
          <p>
            <b>Name:</b> {cat.name}
          </p>
        </div>
        <div>
          <p>
            <b>Sex:</b> {cat.sex}
          </p>
        </div>
        <div>
          <p>
            <b>Age:</b> {cat.age}
          </p>
        </div>
        <div>
          <p>
            <b>Breed:</b> {cat.breed}
          </p>
        </div>
        <div>
          <p>
            <b>Health Condition:</b> {cat.health}
          </p>
        </div>
        <div>
          <p>
            <b>Adoption Status:</b> {cat.adoptionStatus}
          </p>
        </div>
      </div>
      {user && user.isAdmin && (
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
        {user && user.isAdmin && (
          <button id="deleteBtn" onClick={() => handleDeleteCat(cat._id)}>
            DELETE CAT
          </button>
        )}
      </div>
      <hr />
      <div style={{ paddingBottom: "50px" }}>
        <h2 style={{fontSize: "35px"}}>Applicants for this cat: </h2>
      </div>
    </div>
  );
}

export default CatCard;
