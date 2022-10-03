import React from 'react';
import { useState, useEffect } from 'react';
import WorldNews from './WorldNews.jsx';

function Main() {

	const searchOptions = {
		key: process.env.REACT_APP_NEWSFEED_KEY,
		pageSize: 10,
		"total": 1,
		orderBy: 'newest',
		api: 'https://content.guardianapis.com',
		endpoint: '/search?',
	};

	const [getWorldData, setGetWorldData] = useState(null);

	const fullUrl = `https://content.guardianapis.com/search?q=12%20years%20a%20slave&format=json&total=1&tag=film/film,tone/reviews&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&order-by=relevance&api-key=${searchOptions.key}`;

	const fetchData = () => {
		fetch(fullUrl)
			.then((res) => res.json())
			.then((data) => {
				setGetWorldData(data.response.results);
				console.log(getWorldData);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='main'>
			<h1>Main Menu</h1>
			<WorldNews worldNewsGetData={getWorldData} />
		</div>
	);
}

export default Main;
