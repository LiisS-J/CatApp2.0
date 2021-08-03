import React from "react";
import { Link } from "react-router-dom";

function CatListItem({ cat }) {
  return (
    <div>
      <div>
        <h3>{cat.name}</h3>
      </div>
      <div>
          <div>
              AGE: {cat.age}
          </div>
          <div>
              SEX: {cat.sex}
          </div>
          <div>
              BREED: {cat.breed}
          </div>
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
