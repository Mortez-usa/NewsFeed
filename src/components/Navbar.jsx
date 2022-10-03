import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm.jsx';

function Navbar() {
	return (
		<nav className='navbar'>
			<h2>
				<Link to='/' className='siteTitle'>
					Morteza News
				</Link>
			</h2>
			<SearchForm />
			<ul>
				<li className='active'>
					<Link to='/News'>News</Link>
				</li>
				<li>
					<Link to='/Sport'>Sport</Link>
				</li>
				<li>
					<Link to='/Culture'>Culture</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
