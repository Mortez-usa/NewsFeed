import React from 'react';

function SearchForm() {
	return (
		<form className="form-horizontal">
			<input className='' placeholder="Search" type="text" name="searchString" required />
			<button type="submit">Search</button>
		</form>
	);
}

export default SearchForm;