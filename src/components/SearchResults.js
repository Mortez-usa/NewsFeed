import React from 'react';
import { Link } from 'react-router-dom';

function SearchResults({ article }) {
	if (!article.length) {
		return <h2>About Zero results!</h2>;
	}
	return (
		<div>
			{article.map((art) => (
				<div key={art.id}>
					<h3>
						<Link to={art.webUrl}>{art.webTitle}</Link>
					</h3>
				</div>
			))}
		</div>
	);
}

export default SearchResults;
