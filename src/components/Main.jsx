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
	 const [getUsData, setGetUsData] = useState(null);

	const worldUrl = `https://content.guardianapis.com/search?section=world&q=4%20years%20a%20slave&format=json&total=4&from-date=2010-01-01&show-tags=world&show-fields=starRating,headline,thumbnail,short-url&order-by=relevance&api-key=${searchOptions.key}`;

	const usUrl = `https://content.guardianapis.com/search?section=us-news&q=4%20years%20a%20slave&format=json&total=4&from-date=2010-01-01&show-tags=world&show-fields=starRating,headline,thumbnail,short-url&order-by=relevance&api-key=${searchOptions.key}`;

	//const fullUrl = mockdata.json;

	const fetchData = () => {
		fetch(worldUrl)
			.then((res) => res.json())
			.then((data) => {
				setGetWorldData(data.response.results);
			});


		fetch(usUrl)
			.then((res) => res.json())
			.then((data) => {
				setGetUsData(data.response.results);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);


	return (
		<div className='main-menu'>
			<WorldNews 
				worldNewsGetData={getWorldData}
				getUsData={getUsData} />
		</div>
	);
}

export default Main;
