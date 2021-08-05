import React from "react";
import { useLocation } from "react-router-dom";
import CatCard from "../CatCard/CatCard";
import "../CatCard/CatCard.css";

function CatDetailPage(props) {
  // Refer to PuppyListItem to see how puppy is being passed via the <Link>
  // using the useLocation hook from react-router dom, to grab the
  // state, desctructering the puppy variable attached to state
  const {
    state: { cat },
  } = useLocation();

  return (
    <div className="catDetails">
      <CatCard
        className="catDetails"
        cat={cat}
        key={cat._id}
        handleDeleteCat={props.handleDeleteCat}
      />
    </div>
  );
}

export default CatDetailPage;
