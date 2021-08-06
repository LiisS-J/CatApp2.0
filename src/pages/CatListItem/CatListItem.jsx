import React from "react";
import { Link } from "react-router-dom";

function CatListItem({ cat }) {
  return (
    <div className="details">
      <div>
        <img src={`${cat.imgUrl}`} />
      </div>
      <div>
        <h2 style={{ fontSize: "35px", textDecoration: "underline" }}>
          {cat.name}
        </h2>
      </div>
      <div>
        <div>
          <p>
            <b>Age:</b> {cat.age}
          </p>
        </div>
        <div>
          <p>
            <b>Sex:</b> {cat.sex}
          </p>
        </div>
        <div>
          <p>
            <b>Breed:</b> {cat.breed}
          </p>
        </div>
        <Link
          style={{ fontSize: "25px", color: "#3AA6DD" }}
          className="meetLink"
          to={{
            pathname: "/details",
            state: { cat },
          }}
        >
          MEET ME!
        </Link>
      </div>
    </div>
  );
}

export default CatListItem;
