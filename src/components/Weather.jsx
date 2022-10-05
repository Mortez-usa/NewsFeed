import React from 'react';
import { useState, useEffect } from 'react';

function Weather() {

	 
	// let weather = {
	// 	apiKey: '39de9b380dcb4807b9f5d8748aeeb669',
	// 	fetchWeather: function (city) {
	// 		fetch(
	// 			'https://api.openweathermap.org/data/2.5/weather?q=' +
	// 				city +
	// 				'&units=metric&appid=' +
	// 				this.apiKey
	// 		)
	// 			.then((response) => response.json())
	// 			.then((data) => this.displayWeather(data));
	// 	},
	// 	displayWeather: function (data) {
	// 		const { name } = data;
	// 		const { temp, humidity } = data.main;
	// 		const { icon, description } = data.weather[0];
	// 		const { speed } = data.wind;
	// 		console.log(name, icon, description, speed, temp, humidity);
	// 		document.querySelector('.city').innerText = name;
	// 		document.querySelector('.temp').innerText = temp + '°C';
	// 		document.querySelector('.description').innerText = description;
	// 		document.querySelector('.humidity').innerText = humidity + '%';
	// 		document.querySelector('.wind').innerText = speed + 'Km/h';
	// 		document.querySelector('.icon').src =
	// 			'http://openweathermap.org/img/wn/' + icon + '@2x.png';
	// 	},
	// 	search: function () {
	// 		this.fetchWeather(document.querySelector('.search-bar').value);
	// 	},
	// };


	// document
	// 	.querySelector('.search-button')
	// 	.addEventListener('click', function () {
	// 		weather.search();
	// 	});


	

/////////////////////////////////////////////////////
	return (
		<div className='weather'>
			<h2>Weather</h2>
			<div className='cards'>
				<div className='search'>
					<input type='text' className='search-bar' placeholder='Search' />
					<button className='search-button'>
						<svg
							stroke='currentColor'
							fill='currentColor'
							strokeWidth='0'
							viewBox='0 0 1024 1024'
							height='1.5em'
							width='1.5em'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z'></path>
						</svg>
					</button>
				</div>
				<div className='weather'>
					<h2 className='city'>Weather</h2>
					<h1 className='temp'>51°C</h1>
					<img src='' alt='' className='icon' />
					<div className='description'>cloudy</div>
					<div className='humidity'>60%</div>
					<div className='wind'>wind speed: 22 km/h</div>
				</div>
			</div>
		</div>
	);
}

export default Weather;
