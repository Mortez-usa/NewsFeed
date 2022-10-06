import React from 'react';

function SearchResults({ article }) {
	if (!article.length) {
		return <h2 className="found-nothing">About Zero results!</h2>;
	}

	function goHome() {
		window.location.replace('./News');
	}
	return (
		<div>
			{article.map((art) => (
				<div key={art.id}>
					<h3 className='search-bar-txt'>
						<a
							onClick={goHome}
							href={art.webUrl}
							target='_blank'
							rel='noopener noreferrer'>
							<span>{art.webTitle}</span>
						</a>
					</h3>
				</div>
			))}
		</div>
	);
}

export default SearchResults;
