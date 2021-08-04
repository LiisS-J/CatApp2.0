import React from "react";
import { Link } from "react-router-dom";

function CatListItem({ cat }) {
  return (
    <div> 
        <div><img src={cat.imgUrl} /></div>
      <div>
        <h2>{cat.name}</h2>
      </div>
      <div>
        <div><b>Age:</b> {cat.age}</div>
        <div><b>Sex:</b> {cat.sex}</div>
        <div><b>Breed:</b> {cat.breed}</div>
        <Link
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
