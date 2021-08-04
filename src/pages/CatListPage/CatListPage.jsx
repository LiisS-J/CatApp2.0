import React from 'react';
import { useState, useEffect } from "react";
import catsAPI from '../../utilities/cats-api';
import CatListItem from '../../pages/CatListItem/CatListItem';

function CatListPage(props) {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        async function getCats() {
            const allCats = await catsAPI.getAll();
            // set it to state
            setCats(allCats);
        }
        getCats();
    }, []);

    return (
		<>
			<h1>Meet our kitties</h1>
			<div>
				{cats.map(cat => (
					<CatListItem
						cat={cat}
						key={cat._id}
                        handleDeleteCat={props.handleDeleteCat}
					/>
				))}
			</div>
		</>
	);
}

export default CatListPage;
