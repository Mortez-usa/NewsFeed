import React from 'react';
import Main from '../components/Main.jsx';
import Weather from '../components/Weather.jsx';
import SideLeft from '../components/SideLeft.jsx';
import { useState, useEffect} from 'react';

function News() {

	return (
		<div className='mainpage'>
			<SideLeft />
			<Main />
			<Weather />
		</div>
	);
}

export default News;
