import React from "react";
import { Link } from "react-router-dom";

function CatListItem({ cat, handleDeleteCat }) {
  return (
    <div>
      <div>
        <h3>{cat.name}</h3>
      </div>
      <div>
        <Link
          to={{
            pathname: "/details",
            state: { cat },
          }}
        >
          MEET ME!
        </Link>
        <Link
          to={{
            pathname: "/edit",
            state: { cat },
          }}
        >
          EDIT CAT
        </Link>
        <button onClick={() => handleDeleteCat(cat._id)}>DELETE</button>
      </div>
    </div>
  );
}

export default CatListItem;
