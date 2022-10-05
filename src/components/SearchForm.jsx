import React from 'react';
import SearchResults from './SearchResults';

function SearchForm({ handleSubmit, handleChange, searchString, article }) {
	return (
		<form onSubmit={handleSubmit} className='form-horizontal'>
			<input
				placeholder='Search'
				type='text'
				name='searchString'
				required
				onChange={handleChange}
				value={searchString}
			/>
			<button className='btn-search' type='submit'>
				Search
			</button>
			<SearchResults article={article} />
		</form>
	);
}

export default SearchForm;