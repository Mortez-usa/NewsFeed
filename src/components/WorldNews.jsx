import React from 'react';

function WorldNews({ worldNewsGetData, getUsData }) {
	return (
		<div>
			<div className='news-container'>
				<h1>World News</h1>
				<div className='column-one'>
					<h2 className='headline'>
						<a
							href={worldNewsGetData && worldNewsGetData[0].webUrl}
							target='_blank'
							rel='noopener noreferrer'>
							{worldNewsGetData && worldNewsGetData[0].fields.headline}
						</a>
					</h2>
					<p className='pub-data'>
						{worldNewsGetData && worldNewsGetData[0].webPublicationDate}
					</p>
					<img
						className='img-banner'
						src={worldNewsGetData && worldNewsGetData[0].fields.thumbnail}
					/>

					<h2 className='headline'>
						<a
							href={worldNewsGetData && worldNewsGetData[1].webUrl}
							target='_blank'
							rel='noopener noreferrer'>
							{worldNewsGetData && worldNewsGetData[1].fields.headline}
						</a>
					</h2>
					<p className='pub-data'>
						{worldNewsGetData && worldNewsGetData[1].webPublicationDate}
					</p>
					<img
						className='img-banner'
						src={worldNewsGetData && worldNewsGetData[1].fields.thumbnail}
					/>
				</div>

				<div className='column-two'>
					<h2 className='headline'>
						<a
							href={worldNewsGetData && worldNewsGetData[2].webUrl}
							target='_blank'
							rel='noopener noreferrer'>
							{worldNewsGetData && worldNewsGetData[2].fields.headline}
						</a>
					</h2>
					<p className='pub-data'>
						{worldNewsGetData && worldNewsGetData[2].webPublicationDate}
					</p>
					<img
						className='img-banner'
						src={worldNewsGetData && worldNewsGetData[2].fields.thumbnail}
					/>

					<h2 className='headline'>
						<a
							href={worldNewsGetData && worldNewsGetData[3].webUrl}
							target='_blank'
							rel='noopener noreferrer'>
							{worldNewsGetData && worldNewsGetData[3].fields.headline}
						</a>
					</h2>
					<p className='pub-data'>
						{worldNewsGetData && worldNewsGetData[3].webPublicationDate}
					</p>
					<img
						className='img-banner'
						src={worldNewsGetData && worldNewsGetData[3].fields.thumbnail}
					/>
				</div>
			</div>
			<hr></hr>
			<div className='news-container'>
				<h1>United States</h1>
				<div className='column-one'>
					<img
						className='img-banner'
						src={getUsData && getUsData[0].fields.thumbnail}
					/>

					<h2 className='headline'>
						<a
							href={getUsData && getUsData[0].webUrl}
							target='_blank'
							rel='noopener noreferrer'>
							{getUsData && getUsData[0].fields.headline}
						</a>
					</h2>
					<p className='pub-data'>
						{getUsData && getUsData[0].webPublicationDate}
					</p>
					<img
						className='img-banner'
						src={getUsData && getUsData[1].fields.thumbnail}
					/>
					<h2 className='headline'>
						<a
							href={getUsData && getUsData[1].webUrl}
							target='_blank'
							rel='noopener noreferrer'>
							{getUsData && getUsData[1].fields.headline}
						</a>
					</h2>
					<p className='pub-data'>
						{getUsData && getUsData[1].webPublicationDate}
					</p>
				</div>

				<div className='column-two'>
					<img
						className='img-banner'
						src={getUsData && getUsData[2].fields.thumbnail}
					/>

					<h2 className='headline'>
						<a
							href={getUsData && getUsData[2].webUrl}
							target='_blank'
							rel='noopener noreferrer'>
							{getUsData && getUsData[2].fields.headline}
						</a>
					</h2>
					<p className='pub-data'>
						{getUsData && getUsData[2].webPublicationDate}
					</p>

					<img
						className='img-banner'
						src={getUsData && getUsData[3].fields.thumbnail}
					/>
					<h2 className='headline'>
						<a
							href={getUsData && getUsData[3].webUrl}
							target='_blank'
							rel='noopener noreferrer'>
							{getUsData && getUsData[3].fields.headline}
						</a>
					</h2>
					<p className='pub-data'>
						{getUsData && getUsData[3].webPublicationDate}
					</p>
				</div>
			</div>
		</div>
	);
}

export default WorldNews;
