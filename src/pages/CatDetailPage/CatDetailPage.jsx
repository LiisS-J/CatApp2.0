import React from 'react';
import { useLocation } from 'react-router-dom';
import CatCard from '../CatCard/CatCard';

function CatDetailPage(props) {
	// Refer to PuppyListItem to see how puppy is being passed via the <Link>
	// using the useLocation hook from react-router dom, to grab the
	// state, desctructering the puppy variable attached to state
	const {
		state: { cat },
	} = useLocation();

	return (
		<>
			<CatCard cat={cat} key={cat._id} handleDeleteCat={props.handleDeleteCat}/>
		</>
	);
}

export default CatDetailPage;
