import React from 'react';
import { Link } from 'react-router-dom';
import News from '../pages/News.js';

function Navbar() {
	 
	return (
		<div>
			<nav className='navbar'>
				<h2>
					<Link to='/News' className='siteTitle'>
						Morteza News
					</Link>
				</h2>
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
		</div>
	);
}

export default Navbar;
