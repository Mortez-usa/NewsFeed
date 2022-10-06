import React from 'react';
import SearchResults from './SearchResults';

function SearchForm({ handleSubmit, handleChange, searchString, article }) {
	return (
		<form onSubmit={handleSubmit} className='form-horizontal'>
			<div className='search-pack'>
				<input
					className='form-control'
					placeholder='Search Guardian'
					type='text'
					name='searchString'
					required
					onChange={handleChange}
					value={searchString}
				/>
				<button className='btn-search' type='submit'>
					Search
				</button>
				
			</div>

			<SearchResults article={article} />
		</form>
	);
}

export default SearchForm;
