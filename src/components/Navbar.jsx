import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	function refreshPage() {
		window.location.reload(true);
	}
	return (
		<nav className='navbar'>
			<h2 onClick={refreshPage}>
				<Link to='./News' className='siteTitle'>
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
	);
}

export default Navbar;
