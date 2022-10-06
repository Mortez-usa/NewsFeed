import Navbar from './components/Navbar.jsx';
import SearchForm from './components/SearchForm.jsx';
import Footer from './components/Footer.jsx';
import News from './pages/News.js';
import Sport from './pages/Sport.js';
import Culture from './pages/Culture.js';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
	const [article, setArticles] = useState([]);
	const [searchString, setSearchString] = useState('');

	const searchOptions = {
		key: process.env.REACT_APP_NEWSFEED_KEY,
		pageSize: 10,
		total: 1,
		orderBy: 'newest',
		api: 'https://content.guardianapis.com',
		endpoint: '/search?',
	};

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getArticle(searchString);
	}

	function getArticle(searchString) {
		const guardianUrl = `https://content.guardianapis.com/search?q=${searchString}&api-key=${searchOptions.key}`;

		fetch(guardianUrl)
			.then((res) => res.json())
			.then((data) => {
				setArticles(data.response.results);
				setSearchString('');
			})
			.catch(console.error);
	}

	useEffect(() => {
		getArticle(searchString);
	}, []);

	return (
		<div>
			<Navbar />

			<div>
				<SearchForm
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					searchString={searchString}
					article={article}
				/>
			</div>

			<div>
				<Routes>
					<Route path='/News' element={<News />} />
					<Route path='/Culture' element={<Culture />} />
					<Route path='/Sport' element={<Sport />} />
					<Route />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
